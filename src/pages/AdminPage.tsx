import { BarChart3, Package, Recycle, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";
import { useAppState } from "../state/AppContext";

export function AdminPage() {
  usePageTitle("관리자");
  const { user } = useAppState();

  if (user?.role !== "ADMIN") {
    return (
      <main className="page-shell">
        <section className="empty-state">
          <p className="eyebrow">Admin only</p>
          <h1>관리자 로그인이 필요합니다.</h1>
          <p>관리자 계정으로 로그인해야 운영 화면을 볼 수 있습니다.</p>
          <Link className="primary-link" to="/login">로그인으로 이동</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <section className="page-hero compact">
        <p className="eyebrow">Admin</p>
        <h1>관리자 페이지</h1>
        <p>주문, 상품, 회원, 공병 반납, 리필 신청, ESG 데이터를 운영 관점에서 확인합니다.</p>
      </section>
      <section className="admin-grid">
        <article><BarChart3 /><span>오늘 매출</span><strong>1,284,000원</strong><p>오늘 주문 수 48건</p></article>
        <article><Users /><span>신규 회원</span><strong>22명</strong><p>Green 등급 자동 부여</p></article>
        <article><Recycle /><span>공병 반납 신청</span><strong>17건</strong><p>검수중 6건</p></article>
        <article><Package /><span>리필 신청</span><strong>9건</strong><p>기준확인중 3건</p></article>
      </section>
      <section className="table-wrap">
        <table>
          <thead>
            <tr><th>관리 항목</th><th>주요 기능</th><th>처리 상태</th></tr>
          </thead>
          <tbody>
            <tr><td>상품 관리</td><td>등록, 수정, 삭제, 가격, 재고, 판매 상태 변경</td><td><span className="status">운영중</span></td></tr>
            <tr><td>주문 관리</td><td>결제 상태 확인, 배송 상태 변경, 취소/환불 처리</td><td><span className="status">배송중</span></td></tr>
            <tr><td>공병 반납</td><td>신청 확인, 수량 검수, 승인/반려, 포인트 지급</td><td><span className="status">검수중</span></td></tr>
            <tr><td>ESG 데이터</td><td>회수량, 리필 수, 플라스틱 절감량, 탄소 절감 추정</td><td><span className="status">집계중</span></td></tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
