import { Crown } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle";

const grades = [
  ["Green", "신규 회원", "기본 적립"],
  ["Eco", "공병 5개 이상 반납", "리필 할인"],
  ["Vegan", "공병 15개 이상 반납", "굿즈 제공"],
  ["Oblige", "공병 30개 이상 반납", "무료 리필 쿠폰"]
];

export function GradesPage() {
  usePageTitle("회원 등급");

  return (
    <main className="page-shell">
      <section className="page-hero compact">
        <p className="eyebrow">Member grade</p>
        <h1>회원 등급</h1>
        <p>Green, Eco, Vegan, Oblige 등급으로 참여 혜택이 확장됩니다.</p>
      </section>
      <section className="grade-grid">
        {grades.map(([name, condition, benefit]) => (
          <article key={name}>
            <Crown />
            <h2>{name}</h2>
            <p>{condition}</p>
            <strong>{benefit}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}
