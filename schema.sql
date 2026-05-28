CREATE DATABASE IF NOT EXISTS oblige_esg
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;

USE oblige_esg;

CREATE TABLE users (
  user_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(120) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(30),
  grade ENUM('Green', 'Eco', 'Vegan', 'Oblige') NOT NULL DEFAULT 'Green',
  point INT NOT NULL DEFAULT 0,
  role ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',
  status ENUM('ACTIVE', 'DORMANT', 'BLOCKED', 'WITHDRAWN') NOT NULL DEFAULT 'ACTIVE',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
  product_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(120) NOT NULL,
  category ENUM('토너', '앰플', '크림') NOT NULL,
  volume ENUM('30ml', '50ml', '100ml') NOT NULL,
  price INT NOT NULL,
  stock INT NOT NULL DEFAULT 0,
  description TEXT,
  ingredients TEXT,
  is_vegan BOOLEAN NOT NULL DEFAULT TRUE,
  is_refillable BOOLEAN NOT NULL DEFAULT TRUE,
  empty_bottle_point INT NOT NULL DEFAULT 0,
  image_url VARCHAR(500),
  status ENUM('판매중', '품절', '숨김') NOT NULL DEFAULT '판매중',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_products_category_volume (category, volume)
);

CREATE TABLE orders (
  order_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED NOT NULL,
  total_price INT NOT NULL,
  order_status ENUM('결제완료', '상품준비중', '배송중', '배송완료', '구매확정', '취소요청', '환불완료') NOT NULL DEFAULT '결제완료',
  payment_status ENUM('결제대기', '결제완료', '결제취소', '환불완료') NOT NULL DEFAULT '결제완료',
  delivery_status ENUM('배송전', '상품준비중', '배송중', '배송완료') NOT NULL DEFAULT '배송전',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_orders_user FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE order_items (
  order_item_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  order_id BIGINT UNSIGNED NOT NULL,
  product_id BIGINT UNSIGNED NOT NULL,
  quantity INT NOT NULL DEFAULT 1,
  price INT NOT NULL,
  CONSTRAINT fk_order_items_order FOREIGN KEY (order_id) REFERENCES orders(order_id),
  CONSTRAINT fk_order_items_product FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE bottle_returns (
  return_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED NOT NULL,
  bottle_count INT NOT NULL,
  bottle_type ENUM('토너', '앰플', '크림', '혼합') NOT NULL,
  return_status ENUM('신청접수', '수거대기', '검수중', '승인완료', '반려', '포인트지급완료') NOT NULL DEFAULT '신청접수',
  approved_point INT NOT NULL DEFAULT 0,
  inspection_memo TEXT,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_bottle_returns_user FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE refill_requests (
  refill_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED NOT NULL,
  product_id BIGINT UNSIGNED NOT NULL,
  refill_amount INT NOT NULL DEFAULT 1,
  used_point INT NOT NULL DEFAULT 0,
  refill_status ENUM('신청완료', '기준확인중', '리필준비중', '리필완료', '발송완료', '반려') NOT NULL DEFAULT '신청완료',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_refill_requests_user FOREIGN KEY (user_id) REFERENCES users(user_id),
  CONSTRAINT fk_refill_requests_product FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE point_logs (
  point_log_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED NOT NULL,
  point_change INT NOT NULL,
  point_type ENUM('적립', '사용', '차감', '이벤트') NOT NULL,
  reason VARCHAR(255) NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_point_logs_user FOREIGN KEY (user_id) REFERENCES users(user_id),
  INDEX idx_point_logs_user_created (user_id, created_at)
);

CREATE TABLE reviews (
  review_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED NOT NULL,
  product_id BIGINT UNSIGNED NOT NULL,
  rating TINYINT UNSIGNED NOT NULL,
  content TEXT NOT NULL,
  image_url VARCHAR(500),
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_reviews_user FOREIGN KEY (user_id) REFERENCES users(user_id),
  CONSTRAINT fk_reviews_product FOREIGN KEY (product_id) REFERENCES products(product_id),
  CONSTRAINT chk_reviews_rating CHECK (rating BETWEEN 1 AND 5)
);
