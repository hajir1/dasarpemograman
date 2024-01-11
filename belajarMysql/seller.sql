show databases;
use relasi;
show tables;
create table tbl_customers(
    id_seller int auto_increment,
    nama varchar(100),
    email varchar(100),
    primary key(id),
    unique key email_unik (email)
) engine = innodb;
drop table tbl_seller;