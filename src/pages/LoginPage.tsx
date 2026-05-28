import { Navigate, Link } from "react-router-dom";
import { LogIn } from "lucide-react";
import { useAuthForm } from "../hooks/useAuthForm";
import { usePageTitle } from "../hooks/usePageTitle";
import { useAppState } from "../state/AppContext";

export function LoginPage() {
  const { user, login } = useAppState();
  const form = useAuthForm({ email: "", password: "" });
  usePageTitle("로그인");

  if (user) return <Navigate to="/" replace />;

  return (
    <main className="auth-page">
      <section className="auth-card">
        <p className="eyebrow">Login</p>
        <h1>로그인</h1>
        <form onSubmit={(event) => {
          event.preventDefault();
          form.setSubmitted(true);
          if (form.isValid) login(form.values.email, form.values.password);
        }}>
          <label>이메일
            <input value={form.values.email} onChange={(event) => form.updateField("email", event.target.value)} placeholder="green@oblige.kr" />
          </label>
          <label>비밀번호
            <input type="password" value={form.values.password} onChange={(event) => form.updateField("password", event.target.value)} placeholder="비밀번호" />
          </label>
          {form.submitted && !form.isValid && <p className="form-error">이메일과 비밀번호를 입력해주세요.</p>}
          <button className="primary-link large" type="submit"><LogIn size={18} />로그인</button>
        </form>
        <p className="muted">아직 회원이 아니라면 <Link to="/signup">회원가입</Link>으로 Green 등급을 시작하세요.</p>
        <p className="muted">관리자 화면 확인용 계정: admin@oblige.kr</p>
      </section>
    </main>
  );
}
