import { Link } from "react-router-dom";
import { ShoppingBag, Trash2 } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle";
import { useAppState } from "../state/AppContext";
import { formatCurrency } from "../utils/format";

export function CartPage() {
  usePageTitle("장바구니");
  const { cart, cartTotal, removeFromCart } = useAppState();

  return (
    <main className="page-shell">
      <section className="page-hero compact">
        <p className="eyebrow">Cart</p>
        <h1>장바구니</h1>
        <p>선택한 상품, 용량, 공병 반납 포인트, 결제 예정 금액을 확인합니다.</p>
      </section>
      {cart.length === 0 ? (
        <section className="empty-state">
          <ShoppingBag size={34} />
          <h2>장바구니가 비어 있습니다.</h2>
          <Link className="primary-link" to="/category/toner">상품 담으러 가기</Link>
        </section>
      ) : (
        <section className="table-wrap">
          <table>
            <thead><tr><th>상품</th><th>용량</th><th>수량</th><th>공병 포인트</th><th>금액</th><th>삭제</th></tr></thead>
            <tbody>
              {cart.map((item) => (
                <tr key={`${item.productId}-${item.volume}`}>
                  <td>{item.name}</td>
                  <td>{item.volume}</td>
                  <td>{item.quantity}개</td>
                  <td>{item.returnPoint.toLocaleString("ko-KR")}P</td>
                  <td>{formatCurrency(item.price * item.quantity)}</td>
                  <td>
                    <button className="table-button" type="button" onClick={() => removeFromCart(item.productId, item.volume)}>
                      <Trash2 size={16} /> 삭제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr><td colSpan={4}>총 결제 금액</td><td colSpan={2}><strong>{formatCurrency(cartTotal)}</strong></td></tr>
            </tfoot>
          </table>
        </section>
      )}
    </main>
  );
}
