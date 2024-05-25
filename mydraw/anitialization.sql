CREATE TABLE styles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    style VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL
);

INSERT INTO styles (style, image_url) VALUES
('Manga', '57386_1715801834223.jpg'),
('Manga', '57386_1715801871941.jpg'),
('Manga', '57386_1715801897103.jpg'),
('Réaliste', 'url_de_votre_image_realiste_1.jpg'),
('Réaliste', 'url_de_votre_image_realiste_2.jpg'),
('Réaliste', 'url_de_votre_image_realiste_3.jpg'),
('Cartoon', 'url_de_votre_image_cartoon_1.jpg'),
('Cartoon', 'url_de_votre_image_cartoon_2.jpg'),
('Cartoon', 'url_de_votre_image_cartoon_3.jpg');
