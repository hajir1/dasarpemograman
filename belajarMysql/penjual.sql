use relasi;
create table tbl_sellers(
	id int not null auto_increment,
    id_sellers varchar(100) not null,
    deskripsi text,
    primary key(id)
)engine innodb;
desc tbl_sellers;
alter table tbl_sellers
add constraint fk_sellers_customers foreign key(id_sellers)
references tbl_customers (id_customers);


alter table tbl_sellers
modify id_sellers  int not null;