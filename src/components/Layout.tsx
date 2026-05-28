import { Outlet, NavLink, Link } from "react-router-dom";
import { Leaf, LogIn, ShoppingBag, UserPlus } from "lucide-react";
import { useAppState } from "../state/AppContext";

export function Layout() {
  const { cartCount, user, logout } = useAppState();

  return (
    <>
      <header className="site-header">
        <Link className="brand" to="/">
          <span className="brand-mark"><Leaf size={18} /></span>
          <span>OBLIGE</span>
        </Link>
        <nav className="main-nav" aria-label="주요 메뉴">
          <NavLink to="/">메인</NavLink>
          <NavLink to="/category/toner">쇼핑</NavLink>
          <NavLink to="/bottle-return">공병 반납</NavLink>
          <NavLink to="/points">포인트</NavLink>
          <NavLink to="/refill">리필</NavLink>
          <NavLink to="/grades">회원 등급</NavLink>
          {user?.role === "ADMIN" && <NavLink to="/admin">관리자</NavLink>}
        </nav>
        <div className="header-actions">
          <Link className="icon-link" to="/cart" aria-label="장바구니">
            <ShoppingBag size={18} />
            <strong>{cartCount}</strong>
          </Link>
          {user ? (
            <button className="text-button" type="button" onClick={logout}>{user.name} 로그아웃</button>
          ) : (
            <>
              <Link className="text-button" to="/login"><LogIn size={16} />로그인</Link>
              <Link className="primary-link" to="/signup"><UserPlus size={16} />회원가입</Link>
            </>
          )}
        </div>
      </header>
      <Outlet />
      <footer className="site-footer">
        <strong>OBLIGE</strong>
        <span>GitHub Pages 프론트엔드와 별도 백엔드/API 서버 연동을 전제로 설계된 ESG 화장품 플랫폼입니다.</span>
      </footer>
    </>
  );
}
