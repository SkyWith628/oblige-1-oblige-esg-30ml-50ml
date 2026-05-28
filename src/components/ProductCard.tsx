import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useAppState } from "../state/AppContext";
import type { Product, Volume } from "../types";
import { formatCurrency } from "../utils/format";
import { ProductVisual } from "./ProductVisual";

export function ProductCard({ product }: { product: Product }) {
  const [volume, setVolume] = useState<Volume>("50ml");
  const { addToCart } = useAppState();
  const volumes = Object.keys(product.prices) as Volume[];

  return (
    <article className="product-card">
      <div className="product-image">
        <ProductVisual category={product.category} />
      </div>
      <div className="product-body">
        <div className="product-title-line">
          <h3>{product.name}</h3>
          <strong>{formatCurrency(product.prices[volume])}</strong>
        </div>
        <div className="pill-row">
          <span>{product.categoryLabel}</span>
          <span>재고 {product.stock[volume]}개</span>
          <span>공병 {product.returnPoint}P</span>
        </div>
        <div className="volume-row">
          {volumes.map((item) => (
            <button
              className={item === volume ? "active" : ""}
              type="button"
              key={item}
              onClick={() => setVolume(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <p>{product.summary}</p>
        <div className="card-actions">
          <Link className="secondary-link" to={`/product/${product.id}`}>상세 보기</Link>
          <button className="primary-link" type="button" onClick={() => addToCart(product, volume)}>
            <ShoppingBag size={16} />담기
          </button>
        </div>
      </div>
    </article>
  );
}
