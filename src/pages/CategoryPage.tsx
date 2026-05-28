import { NavLink, useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { categoryMap } from "../data/products";
import { usePageTitle } from "../hooks/usePageTitle";
import { useProducts } from "../hooks/useProducts";
import type { ProductCategory } from "../types";

const categories = Object.keys(categoryMap) as ProductCategory[];

export function CategoryPage() {
  const params = useParams();
  const category = categories.includes(params.category as ProductCategory)
    ? (params.category as ProductCategory)
    : "toner";
  const filteredProducts = useProducts(category);
  usePageTitle(`${categoryMap[category]} 상품`);

  return (
    <main className="page-shell">
      <section className="page-hero compact">
        <p className="eyebrow">Shop category</p>
        <h1>{categoryMap[category]}</h1>
        <p>30ml, 50ml, 100ml 용량 선택과 공병 반납 포인트를 함께 확인할 수 있습니다.</p>
        <div className="segmented">
          {categories.map((item) => (
            <NavLink key={item} to={`/category/${item}`}>{categoryMap[item]}</NavLink>
          ))}
        </div>
      </section>
      <section className="product-grid">
        {filteredProducts.map((product) => <ProductCard product={product} key={product.id} />)}
      </section>
    </main>
  );
}
