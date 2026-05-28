import { Coins } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle";
import { useAppState } from "../state/AppContext";

export function PointsPage() {
  usePageTitle("포인트");
  const { user } = useAppState();
  const point = user?.point ?? 3200;

  return (
    <main className="page-shell">
      <section className="page-hero compact">
        <p className="eyebrow">Point reward</p>
        <h1>포인트 적립</h1>
        <p>승인 완료 후 공병 포인트가 자동으로 반영됩니다.</p>
      </section>
      <section className="admin-grid">
        <article><Coins /><span>보유 포인트</span><strong>{point.toLocaleString("ko-KR")}P</strong><p>공병 반납, 이벤트, 구매 확정으로 적립됩니다.</p></article>
        <article><Coins /><span>이번 달 적립</span><strong>2,100P</strong><p>공병 반납 승인 3건 기준</p></article>
        <article><Coins /><span>사용 가능</span><strong>{Math.max(point - 500, 0).toLocaleString("ko-KR")}P</strong><p>리필 신청과 구매 할인에 사용할 수 있습니다.</p></article>
        <article><Coins /><span>예정 포인트</span><strong>1,400P</strong><p>현재 검수중인 공병 신청 기준</p></article>
      </section>
      <section className="table-wrap">
        <table>
          <thead><tr><th>일자</th><th>구분</th><th>내용</th><th>포인트</th></tr></thead>
          <tbody>
            <tr><td>2026-05-28</td><td>적립</td><td>토너 공병 반납 승인</td><td>+1,400P</td></tr>
            <tr><td>2026-05-20</td><td>사용</td><td>앰플 리필 할인</td><td>-800P</td></tr>
            <tr><td>2026-05-11</td><td>이벤트</td><td>Green 회원 웰컴 포인트</td><td>+1,000P</td></tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
