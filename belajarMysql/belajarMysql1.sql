show databases;
use belajar;
show tables;
describe product;
alter table product
modify deskripsi varchar(110) not null default "";
alter table product
add quantity int not null default 0 after price;
insert into product(id,nama,price)
values (001,'mie ayam original',15000);
select * from product;
insert into product(id,nama,deskripsi,price,quantity)
values (002,'mie ayam bakso','mie ayam bakso',20000,200);
insert into product(id,nama,price,quantity)
values (003,"mie ayam ceker",20000,200),
	   (004,"mie ayam yamin",15000,100),
	   (005,"mie ayam spesial",25000,100);
alter table product
modify deskripsi varchar(10) null;
alter table product
drop column apasaja;
alter table product
drop column alias;

describe product;
describe admin;
create table admin(
id int not null auto_increment,
firstname varchar(100),
lastname varchar(100),
primary key(id)
)engine = "innodb";

insert into admin(fristname,lastname) values ("usam","muhajir");
insert into admin(fristname,lastname) values ("muhajir","kedua");
select * from admin;

