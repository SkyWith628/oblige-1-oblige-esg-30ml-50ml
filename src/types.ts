export type ProductCategory = "toner" | "ampoule" | "cream";
export type Volume = "30ml" | "50ml" | "100ml";
export type MemberGrade = "Green" | "Eco" | "Vegan" | "Oblige";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  summary: string;
  description: string;
  ingredients: string;
  benefits: string[];
  prices: Record<Volume, number>;
  stock: Record<Volume, number>;
  returnPoint: number;
  vegan: boolean;
  crueltyFree: boolean;
  refillable: boolean;
  review: string;
}

export interface CartItem {
  productId: string;
  name: string;
  volume: Volume;
  quantity: number;
  price: number;
  returnPoint: number;
}

export interface User {
  name: string;
  email: string;
  grade: MemberGrade;
  point: number;
  returnedBottleCount: number;
  role: "USER" | "ADMIN";
}

export interface BottleReturnRequest {
  id: string;
  bottleType: string;
  count: number;
  status: "신청접수" | "검수중" | "승인완료" | "포인트지급완료";
  expectedPoint: number;
}

export interface SignupForm {
  name: string;
  email: string;
  password: string;
  phone: string;
}
