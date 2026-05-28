import type { Product } from "../types";

export const products: Product[] = [
  {
    id: "toner-rebalancing",
    name: "리밸런싱 비건 토너",
    category: "toner",
    categoryLabel: "토너",
    summary: "피부결 정돈과 수분 진정을 위한 산뜻한 데일리 토너",
    description: "녹차수와 병풀추출물을 중심으로 피부를 편안하게 정돈하는 리필 가능 토너입니다.",
    ingredients: "녹차수, 병풀추출물, 판테놀, 베타인",
    benefits: ["피부결 정돈", "수분 진정", "다음 단계 흡수 보조"],
    prices: { "30ml": 12000, "50ml": 18000, "100ml": 32000 },
    stock: { "30ml": 28, "50ml": 18, "100ml": 9 },
    returnPoint: 700,
    vegan: true,
    crueltyFree: true,
    refillable: true,
    review: "가볍고 산뜻해서 리필까지 계속 쓰고 싶어요."
  },
  {
    id: "ampoule-glow",
    name: "딥 글로우 비건 앰플",
    category: "ampoule",
    categoryLabel: "앰플",
    summary: "수분 광채와 장벽 케어를 동시에 챙기는 고농축 앰플",
    description: "히알루론산과 약모밀추출물이 건조함을 줄이고 피부 광채를 살려줍니다.",
    ingredients: "나이아신아마이드, 히알루론산, 약모밀추출물",
    benefits: ["수분 광채", "피부 장벽 케어", "건조함 완화"],
    prices: { "30ml": 22000, "50ml": 34000, "100ml": 61000 },
    stock: { "30ml": 21, "50ml": 12, "100ml": 6 },
    returnPoint: 900,
    vegan: true,
    crueltyFree: true,
    refillable: true,
    review: "끈적임 없이 흡수되고 포인트 적립 구조도 좋아요."
  },
  {
    id: "cream-barrier",
    name: "컴포트 배리어 비건 크림",
    category: "cream",
    categoryLabel: "크림",
    summary: "민감한 피부를 위한 보습 장벽 크림",
    description: "식물성 오일과 세라마이드 성분으로 보습막을 만들고 피부 장벽을 보호합니다.",
    ingredients: "식물성 오일, 세라마이드, 알란토인",
    benefits: ["보습막 형성", "장벽 보호", "민감 피부 진정"],
    prices: { "30ml": 18000, "50ml": 27000, "100ml": 49000 },
    stock: { "30ml": 34, "50ml": 16, "100ml": 8 },
    returnPoint: 800,
    vegan: true,
    crueltyFree: true,
    refillable: true,
    review: "패키지가 깔끔하고 공병 반납 신청이 쉬웠어요."
  }
];

export const categoryMap = {
  toner: "토너",
  ampoule: "앰플",
  cream: "크림"
} as const;
