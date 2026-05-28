import { Link } from "react-router-dom";
import { ArrowRight, Recycle, Sparkles } from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";
import { usePageTitle } from "../hooks/usePageTitle";

export function HomePage() {
  usePageTitle("메인");
<<<<<<< HEAD
  const heroImage = `${import.meta.env.BASE_URL}assets/oblige-products.jpg`;
=======
  const heroImage = `${import.meta.env.BASE_URL}assets/oblige-products.png`;
>>>>>>> 5597cf8638f4730309ea89960acf3f4fda6c9789

  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Vegan beauty, refill reward</p>
          <h1>OBLIGE</h1>
          <p>
            비건 화장품 구매, 공병 회수, 포인트 적립, 리필 보상을 하나의 흐름으로 연결한
            ESG 기반 친환경 화장품 플랫폼입니다.
          </p>
          <div className="hero-actions">
            <Link className="primary-link large" to="/category/toner">쇼핑하기 <ArrowRight size={18} /></Link>
            <Link className="secondary-link large" to="/signup">회원가입</Link>
          </div>
        </div>
        <figure className="hero-media">
          <img src={heroImage} alt="OBLIGE 비건 화장품 제품군" />
        </figure>
      </section>

      <section className="metrics-band">
        <article><strong>12,840</strong><span>누적 공병 회수</span></article>
        <article><strong>4,265</strong><span>리필 이용</span></article>
        <article><strong>386kg</strong><span>예상 플라스틱 절감</span></article>
        <article><strong>8,912</strong><span>ESG 참여 회원</span></article>
      </section>

      <section className="section-grid">
        <div className="section-heading">
          <p className="eyebrow">Circular system</p>
          <h2>구매 이후의 책임까지 설계한 뷰티 커머스</h2>
        </div>
        <div className="process-list">
          <Link to="/bottle-return"><Recycle /><h3>공병 반납</h3><p>공병 수량과 타입을 입력하고 검수 상태를 확인합니다.</p></Link>
          <Link to="/points"><Sparkles /><h3>포인트 적립</h3><p>승인된 공병 포인트와 사용 내역을 확인합니다.</p></Link>
          <Link to="/refill"><Recycle /><h3>리필 신청</h3><p>누적 기준 충족 시 리필 할인과 쿠폰 혜택을 신청합니다.</p></Link>
          <Link to="/grades"><Sparkles /><h3>회원 등급</h3><p>Green, Eco, Vegan, Oblige 등급 혜택을 비교합니다.</p></Link>
        </div>
      </section>

      <section className="shop-section">
        <div className="section-heading horizontal">
          <div>
            <p className="eyebrow">Featured</p>
            <h2>대표 상품</h2>
          </div>
          <Link className="secondary-link" to="/category/toner">카테고리 보기</Link>
        </div>
        <div className="product-grid">
          {products.map((product) => <ProductCard product={product} key={product.id} />)}
        </div>
      </section>
    </main>
  );
}
