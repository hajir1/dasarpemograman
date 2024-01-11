show databases;
use belajar;
show tables;
create table barang
(
id int,
nama varchar(100),
harga int,
jumlah int
)engine = innodb;
describe barang;
show create table barang;

alter table barang
add column deskripsi text,
drop column deskripsi,
rename column nama to first_name,
modify harga varchar(10) after jumlah,
modify harga bigint first;

describe barang;
