show databases;
use peminjamanalat;

CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    pwd VARCHAR(255) UNIQUE
);
show tables;
CREATE TABLE alat (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_peminjam VARCHAR(255) NOT NULL,
    kelas varchar(100),
    status ENUM('Tersedia', 'Dipinjam') DEFAULT 'Tersedia',
    id_peminjam INT,
    FOREIGN KEY (id_peminjam) REFERENCES user(id)
);
CREATE TABLE peminjam (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT,
    id_alat INT,
    tanggal_pinjam DATE,
    tanggal_kembali DATE,
    FOREIGN KEY (id_user) REFERENCES user(id),
    FOREIGN KEY (id_alat) REFERENCES alat(id)
);
show create table user;
