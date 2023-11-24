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

INSERT INTO categories (category_name, category_status)
VALUES
('Tênis', 1),
('Camisetas', 1),
('Calças', 1),
('Bonés', 1),
('Headphones', 1),
('Bolsas', 0);

CREATE TABLE IF NOT EXISTS users(
    user_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    user_name VARCHAR(20) NOT NULL,
    user_status INTEGER DEFAULT 1,
    user_email VARCHAR(255) NOT NULL,
    user_fone INTEGER NOT NULL,
    user_data_nasc DATE NOT NULL
);

INSERT INTO users (user_name, user_status, user_email, user_fone, user_data_nasc)
VALUES
('Breno', 1, 'breno@gmail.com', '85988888888', '2004-09-02'),
('José', 1, 'jose@gmail.com', '85988888877', '2000-09-02'),
('Maria', 1, 'maria@gmail.com', '85988888866', '1993-09-02'),
('João', 1, 'joao@gmail.com', '85988888855', '1984-09-02'),
('Antônio', 1, 'antonio@gmail.com', '85988888844', '1999-09-02'),
('Rodrigo', 0, 'rodrigo@gmail.com', '85988888833', '2006-09-02'),
('Eduardo', 0, 'edu@gmail.com', '85988888822', '1888-09-02');

ALTER TABLE users ADD (
    user_fone INTEGER NOT NULL,
    user_data_nasc DATE NOT NULL
);

ALTER TABLE users MODIFY COLUMN user_fone BIGINT NOT NULL;

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
    product_sizes VARCHAR(50) NULL,
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