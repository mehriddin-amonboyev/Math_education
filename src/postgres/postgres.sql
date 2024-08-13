CREATE TABLE  users(
    id SMALLINT PRIMARY KEY,
    name VARCHAR(255),
    image VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    phone VARCHAR(255),
    role VARCHAR(255)
);

INSERT INTO users (id, name, email, password, phone, role)
    VALUES 
    (1,'Mehriddin', 'mehriddin@gmail.com', 'mehriddin77-', '+998943772959', 'student'),
    (3,'Abduvali', 'abduvali@gmail.com', 'abduvali77-', '+998943772959', 'student'),
    (4,'Quvonch', 'quvonch@gmail.com', 'quvonch77-', '+998943772959', 'student'),
    (5,'Yusuf', 'yusuf@gmail.com', 'yusuf77-', '+998943772959', 'student'),
    (6,'Samar', 'samar@gmail.com', 'samar77-', '+998943772959', 'student'),
    (7,'Bahodir', 'bahodir@gmail.com', 'bahodir77-', '+998943772959', 'student'),
    (8,'Sadriddin', 'sadri@gmail.com', 'sadri77-', '+998943772959', 'student'),
    (9,'Nosir', 'nosir@gmail.com', 'nosir723-', '+998943772959', 'student'),
    (10,'Salohiddin', 'saloh@gmail.com', 'saloh77-', '+998943772959', 'student'),
    (12,'Sarvinoz', 'mehriddin@gmail.com', '1234', '+998943772959', 'admin');


CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL
);

CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price INT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    rating INT NOT NULL,
    category_id INT,

    FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE CASCADE
);
INSERT INTO category (id,name,image_url) VALUES (1,'telefonlar', 'image1');
