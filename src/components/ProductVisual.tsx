import type { ProductCategory } from "../types";

export function ProductVisual({ category, large = false }: { category: ProductCategory; large?: boolean }) {
  return (
    <div className={`bottle-visual ${category} ${large ? "large" : ""}`} aria-hidden="true">
      <span />
    </div>
  );
}
