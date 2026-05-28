import { Navigate, Link } from "react-router-dom";
import { UserPlus } from "lucide-react";
import { useAuthForm } from "../hooks/useAuthForm";
import { usePageTitle } from "../hooks/usePageTitle";
import { useAppState } from "../state/AppContext";

export function SignupPage() {
  const { user, signup } = useAppState();
  const form = useAuthForm({ name: "", email: "", password: "", phone: "" });
  usePageTitle("회원가입");

  if (user) return <Navigate to="/" replace />;

  return (
    <main className="auth-page">
      <section className="auth-card">
        <p className="eyebrow">Join</p>
        <h1>회원가입</h1>
        <form onSubmit={(event) => {
          event.preventDefault();
          form.setSubmitted(true);
          if (form.isValid) signup(form.values.name, form.values.email, form.values.password, form.values.phone);
        }}>
          <label>이름
            <input value={form.values.name} onChange={(event) => form.updateField("name", event.target.value)} placeholder="김그린" />
          </label>
          <label>이메일
            <input value={form.values.email} onChange={(event) => form.updateField("email", event.target.value)} placeholder="green@oblige.kr" />
          </label>
          <label>비밀번호
            <input type="password" value={form.values.password} onChange={(event) => form.updateField("password", event.target.value)} placeholder="8자 이상 권장" />
          </label>
          <label>연락처
            <input value={form.values.phone} onChange={(event) => form.updateField("phone", event.target.value)} placeholder="010-0000-0000" />
          </label>
          {form.submitted && !form.isValid && <p className="form-error">모든 항목을 입력해주세요.</p>}
          <button className="primary-link large" type="submit"><UserPlus size={18} />가입하기</button>
        </form>
        <p className="muted">이미 계정이 있다면 <Link to="/login">로그인</Link>으로 이동하세요.</p>
      </section>
    </main>
  );
}
