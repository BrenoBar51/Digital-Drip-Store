--https://dontpad.com/fs17--
CREATE DATABASE IF NOT EXISTS digital_Store;

USE digital_Store;

CREATE TABLE IF NOT EXISTS banners(
    banner_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    banner_image VARCHAR(100) NULL,
    banner_image_bg VARCHAR(100) NULL,
    banner_title VARCHAR(50) NOT NULL,
    banner_title_sup VARCHAR(50) NOT NULL,
    banner_discription VARCHAR(255) NOT NULL,
    banner_cta_text VARCHAR(20) NOT NULL,
    banner_status INTEGER DEFAULT 1
);

CREATE TABLE IF NOT EXISTS brands(
    brand_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    brand_name VARCHAR(20) NOT NULL,
    brand_status INTEGER DEFAULT 1 
);

CREATE TABLE IF NOT EXISTS categories(
    category_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    category_name VARCHAR(20) NOT NULL,
    category_status INTEGER DEFAULT 1
);

INSERT INTO categories (category_name) VALUES (
    category_name ('Tênis'),
    category_name ('Camisetas'),
    category_name ('Calças'),
    category_name ('Bonés'),
    category_name ('Headphones'),
    category_name, category_status ('Bolsas'), (0)
);

CREATE TABLE IF NOT EXISTS users(
    user_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    user_name VARCHAR(20) NOT NULL,
    user_status INTEGER DEFAULT 1
);

ALTER TABLE users ADD (
    user_email VARCHAR(255) NOT NULL,
    user_fone INTEGER NOT NULL,
    user_data_nasc DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS reviews(
    review_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    review_rate INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    review_text VARCHAR(255) NULL,
    review_status INTEGER DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);

CREATE TABLE IF NOT EXISTS genders(
	gender_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	gender_name VARCHAR(50) NOT NULL,
	gender_status INTEGER DEFAULT 1
);

CREATE TABLE IF NOT EXISTS products(
    product_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_image BLOB(100) NULL,
    product_discount INTEGER NOT NULL,
    product_price FLOAT NOT NULL,
    product_sizes VARCHAR NULL,
    product_name VARCHAR(20) NOT NULL,
    product_discription VARCHAR(255) NULL,
    product_category VARCHAR(10) NOT NULL,
    product_colors VARCHAR(10) NOT NULL,
    product_status INTEGER DEFAULT 1,
    product_condition INTEGER DEFAULT 1
);

ALTER TABLE products ADD(
    brand_id INTEGER FOREIGN KEY (brand_id) REFERENCES brands(brand_id),
    category_id INTEGER FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

CREATE TABLE IF NOT EXISTS collections(
    collection_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    collection_image_bg BLOB(100) NULL,
    collection_discount INTEGER NOT NULL,
    collection_title VARCHAR(10) NOT NULL,
    collection_cta_txt VARCHAR(250) NOT NULL,
    collection_status INTEGER DEFAULT 1
);

CREATE TABLE IF NOT EXISTS orders(
    order_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    total_order INTEGER NOT NULL,
    total_order_discount INTEGER NOT NULL,
    order_ship VARCHAR(10) NOT NULL,
    order_status INTEGER DEFAULT 1,
    user_id INTEGER,
    FOREIGN KEY(user_id) REFERENCES users (user_id)
);

CREATE TABLE IF NOT EXISTS carts(
    cart_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cart_products VARCHAR(100) NOT NULL
);