import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { ProductVisual } from "../components/ProductVisual";
import { products } from "../data/products";
import { usePageTitle } from "../hooks/usePageTitle";
import { useAppState } from "../state/AppContext";
import type { Volume } from "../types";
import { formatCurrency } from "../utils/format";

export function DetailPage() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);
  const [volume, setVolume] = useState<Volume>("50ml");
  const { addToCart } = useAppState();
  usePageTitle(product ? product.name : "상품 없음");

  if (!product) {
    return (
      <main className="page-shell">
        <section className="empty-state">
          <h1>상품을 찾을 수 없습니다.</h1>
          <Link className="primary-link" to="/category/toner">상품 목록으로 이동</Link>
        </section>
      </main>
    );
  }

  const volumes = Object.keys(product.prices) as Volume[];

  return (
    <main className="page-shell">
      <Link className="back-link" to={`/category/${product.category}`}><ArrowLeft size={16} />목록으로</Link>
      <section className="detail-layout">
        <div className="detail-media">
          <ProductVisual category={product.category} large />
        </div>
        <div className="detail-body">
          <p className="eyebrow">{product.categoryLabel}</p>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className="volume-row">
            {volumes.map((item) => (
              <button className={item === volume ? "active" : ""} type="button" key={item} onClick={() => setVolume(item)}>
                {item}
              </button>
            ))}
          </div>
          <strong className="detail-price">{formatCurrency(product.prices[volume])}</strong>
          <dl className="detail-list">
            <div><dt>주요 성분</dt><dd>{product.ingredients}</dd></div>
            <div><dt>제품 효능</dt><dd>{product.benefits.join(", ")}</dd></div>
            <div><dt>비건 원료</dt><dd>{product.vegan ? "사용" : "미사용"}</dd></div>
            <div><dt>크루얼티 프리</dt><dd>{product.crueltyFree ? "인증 대상" : "확인 필요"}</dd></div>
            <div><dt>리필 가능</dt><dd>{product.refillable ? "가능" : "불가"}</dd></div>
            <div><dt>공병 보상</dt><dd>반납 승인 시 {product.returnPoint}P 지급</dd></div>
            <div><dt>재고</dt><dd>{product.stock[volume]}개</dd></div>
          </dl>
          <div className="review-box">
            <strong>리뷰</strong>
            <p>{product.review}</p>
          </div>
          <button className="primary-link large" type="button" onClick={() => addToCart(product, volume)}>
            <ShoppingBag size={18} />장바구니 담기
          </button>
        </div>
      </section>
    </main>
  );
}
