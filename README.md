# OBLIGE ESG Vegan Cosmetics React Prototype

OBLIGE는 비건 화장품 판매, 공병 반납, 리필 보상, 포인트 적립을 결합한 ESG 기반 친환경 화장품 플랫폼입니다.

## 포함 파일

- `src`: 웹사이트 화면과 동작 코드
- `schema.sql`: MySQL 기준 데이터베이스 테이블 설계
- `public/assets/oblige-products.jpg`: 웹사이트 대표 제품 비주얼

## 화면 구성

- 메인: 브랜드 소개, ESG 가치, 공병 리워드 흐름, 대표 지표
- 카테고리 페이지: 토너, 앰플, 크림을 각각 다른 URL로 분리
- 상세: 성분, 효능, 비건 여부, 크루얼티 프리, 리필 가능 여부, 공병 보상, 리뷰
- 회원: 회원가입, 로그인
- 공병 반납: 수량과 타입 입력, 검수 상태 확인
- 포인트: 보유 포인트와 사용 내역 확인
- 리필 신청: 리필 기준과 신청 입력
- 회원 등급: Green, Eco, Vegan, Oblige 혜택 안내
- 장바구니: 담은 상품을 독립 페이지에서 확인
- 관리자: 관리자 계정 로그인 후 대시보드, 상품 관리, 공병 반납 관리, ESG 데이터 관리

## 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

## 배포 방향

프론트엔드는 GitHub Pages에 배포할 수 있습니다.
로그인, 주문, 결제, 관리자 처리, SQL 저장은 별도 백엔드가 필요합니다.

권장 구조:

- Frontend: React 또는 HTML/CSS/JavaScript
- Backend: Node.js + Express 또는 PHP
- Database: MySQL
- Repository: GitHub
- Deployment: GitHub Pages + 별도 백엔드 서버

GitHub Pages 배포 예시:

```bash
npm run deploy
```

빌드 시 `dist/404.html`을 함께 생성하여 새로고침이나 직접 URL 접근 시에도 웹사이트 화면으로 복귀할 수 있게 구성했습니다.

외부 접속 URL:

```text
https://skywith628.github.io/oblige-1-oblige-esg-30ml-50ml/
```
