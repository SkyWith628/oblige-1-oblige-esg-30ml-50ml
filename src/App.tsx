import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AdminPage } from "./pages/AdminPage";
import { BottleReturnPage } from "./pages/BottleReturnPage";
import { CartPage } from "./pages/CartPage";
import { CategoryPage } from "./pages/CategoryPage";
import { DetailPage } from "./pages/DetailPage";
import { GradesPage } from "./pages/GradesPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PointsPage } from "./pages/PointsPage";
import { RefillPage } from "./pages/RefillPage";
import { SignupPage } from "./pages/SignupPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/product/:productId" element={<DetailPage />} />
        <Route path="/bottle-return" element={<BottleReturnPage />} />
        <Route path="/points" element={<PointsPage />} />
        <Route path="/refill" element={<RefillPage />} />
        <Route path="/grades" element={<GradesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/shop" element={<Navigate to="/category/toner" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
