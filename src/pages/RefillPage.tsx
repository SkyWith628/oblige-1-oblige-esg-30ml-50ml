import { PackageCheck } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle";
import { products } from "../data/products";

export function RefillPage() {
  usePageTitle("리필 신청");

  return (
    <main className="page-shell">
      <section className="page-hero compact">
        <p className="eyebrow">Refill request</p>
        <h1>리필 신청</h1>
        <p>누적 기준 충족 시 리필 할인과 쿠폰 혜택을 받을 수 있습니다.</p>
      </section>
      <section className="service-layout">
        <form className="service-form">
          <PackageCheck size={28} />
          <h2>리필 상품 선택</h2>
          <label>상품
            <select>
              {products.map((product) => <option key={product.id}>{product.name}</option>)}
            </select>
          </label>
          <label>리필 수량
            <input type="number" min="1" defaultValue="1" />
          </label>
          <label>사용 포인트
            <input type="number" min="0" defaultValue="1200" />
          </label>
          <button className="primary-link large" type="button">리필 신청하기</button>
        </form>
        <div className="info-panel">
          <h2>리필 처리 단계</h2>
          <ol className="step-list">
            <li><strong>신청완료</strong><span>회원이 리필 상품과 수량을 선택합니다.</span></li>
            <li><strong>기준확인중</strong><span>관리자가 공병 반납 기준 충족 여부를 확인합니다.</span></li>
            <li><strong>리필준비중</strong><span>리필 가능 수량과 사용 포인트를 반영합니다.</span></li>
            <li><strong>발송완료</strong><span>리필 상품 발송 후 참여 이력이 누적됩니다.</span></li>
          </ol>
        </div>
      </section>
    </main>
  );
}
