import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

export function NotFoundPage() {
  usePageTitle("오류");

  return (
    <main className="page-shell">
      <section className="empty-state">
        <p className="eyebrow">404</p>
        <h1>요청한 화면을 찾을 수 없습니다.</h1>
        <p>요청한 주소가 없거나 이동할 수 없는 화면입니다. 올바른 메뉴를 선택해 다시 이동해주세요.</p>
        <Link className="primary-link" to="/">메인으로 이동</Link>
      </section>
    </main>
  );
}
