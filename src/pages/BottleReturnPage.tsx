import { useState } from "react";
import { Recycle } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle";
import { useAppState } from "../state/AppContext";

export function BottleReturnPage() {
  usePageTitle("공병 반납");
  const { bottleReturns, submitBottleReturn } = useAppState();
  const [bottleType, setBottleType] = useState("토너");
  const [count, setCount] = useState(1);

  return (
    <main className="page-shell">
      <section className="page-hero compact">
        <p className="eyebrow">Empty bottle return</p>
        <h1>공병 반납</h1>
        <p>공병 수량과 타입을 입력하면 관리자 검수 단계로 넘어갑니다.</p>
      </section>

      <section className="service-layout">
        <form className="service-form" onSubmit={(event) => {
          event.preventDefault();
          submitBottleReturn(bottleType, count);
        }}>
          <Recycle size={28} />
          <h2>반납 신청</h2>
          <label>공병 타입
            <select value={bottleType} onChange={(event) => setBottleType(event.target.value)}>
              <option>토너</option>
              <option>앰플</option>
              <option>크림</option>
              <option>혼합</option>
            </select>
          </label>
          <label>공병 수량
            <input type="number" min="1" value={count} onChange={(event) => setCount(Number(event.target.value))} />
          </label>
          <button className="primary-link large" type="submit">검수 신청하기</button>
        </form>

        <div className="table-wrap">
          <table>
            <thead><tr><th>신청번호</th><th>타입</th><th>수량</th><th>상태</th><th>예상 포인트</th></tr></thead>
            <tbody>
              {bottleReturns.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.bottleType}</td>
                  <td>{item.count}개</td>
                  <td><span className="status">{item.status}</span></td>
                  <td>{item.expectedPoint.toLocaleString("ko-KR")}P</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
