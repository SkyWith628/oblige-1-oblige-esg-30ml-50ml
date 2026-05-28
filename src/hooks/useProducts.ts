import { useMemo } from "react";
import { products } from "../data/products";
import type { ProductCategory } from "../types";

export function useProducts(category?: ProductCategory) {
  return useMemo(() => {
    if (!category) return products;
    return products.filter((product) => product.category === category);
  }, [category]);
}
