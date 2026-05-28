import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { BottleReturnRequest, CartItem, Product, User, Volume } from "../types";

interface AppState {
  user: User | null;
  cart: CartItem[];
  bottleReturns: BottleReturnRequest[];
  cartCount: number;
  cartTotal: number;
  login: (email: string, password: string) => void;
  signup: (name: string, email: string, password: string, phone: string) => void;
  logout: () => void;
  addToCart: (product: Product, volume: Volume) => void;
  removeFromCart: (productId: string, volume: Volume) => void;
  submitBottleReturn: (bottleType: string, count: number) => void;
}

const AppContext = createContext<AppState | null>(null);
const storedUserKey = "oblige-user";

function readStoredUser() {
  try {
    const storage = window.localStorage;
    const saved = storage.getItem(storedUserKey);
    return saved ? (JSON.parse(saved) as User) : null;
  } catch {
    return null;
  }
}

function writeStoredUser(user: User | null) {
  try {
    const storage = window.localStorage;
    if (user) {
      storage.setItem(storedUserKey, JSON.stringify(user));
      return;
    }
    storage.removeItem(storedUserKey);
  } catch {
    // Some preview environments block storage; in-memory state still covers the active session.
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => readStoredUser());
  const [cart, setCart] = useState<CartItem[]>([]);
  const [bottleReturns, setBottleReturns] = useState<BottleReturnRequest[]>([
    { id: "RET-2301", bottleType: "토너", count: 2, status: "검수중", expectedPoint: 1400 }
  ]);

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  useEffect(() => {
    writeStoredUser(user);
  }, [user]);

  const login = (email: string) => {
    const isAdmin = email.trim().toLowerCase() === "admin@oblige.kr";
    setUser({
      name: isAdmin ? "관리자" : email.split("@")[0] || "OBLIGE 회원",
      email,
      grade: isAdmin ? "Oblige" : "Green",
      point: isAdmin ? 0 : 3200,
      returnedBottleCount: isAdmin ? 30 : 3,
      role: isAdmin ? "ADMIN" : "USER"
    });
  };

  const signup = (name: string, email: string) => {
    setUser({
      name,
      email,
      grade: "Green",
      point: 1000,
      returnedBottleCount: 0,
      role: "USER"
    });
  };

  const logout = () => setUser(null);

  const addToCart = (product: Product, volume: Volume) => {
    setCart((current) => {
      const existing = current.find((item) => item.productId === product.id && item.volume === volume);
      if (existing) {
        return current.map((item) =>
          item.productId === product.id && item.volume === volume
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...current,
        {
          productId: product.id,
          name: product.name,
          volume,
          quantity: 1,
          price: product.prices[volume],
          returnPoint: product.returnPoint
        }
      ];
    });
  };

  const removeFromCart = (productId: string, volume: Volume) => {
    setCart((current) => current.filter((item) => item.productId !== productId || item.volume !== volume));
  };

  const submitBottleReturn = (bottleType: string, count: number) => {
    const expectedPoint = count * 700;
    setBottleReturns((current) => [
      {
        id: `RET-${2302 + current.length}`,
        bottleType,
        count,
        status: "신청접수",
        expectedPoint
      },
      ...current
    ]);
  };

  const value = useMemo(
    () => ({
      user,
      cart,
      bottleReturns,
      cartCount,
      cartTotal,
      login,
      signup,
      logout,
      addToCart,
      removeFromCart,
      submitBottleReturn
    }),
    [user, cart, bottleReturns, cartCount, cartTotal]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppState must be used inside AppProvider");
  }
  return context;
}
