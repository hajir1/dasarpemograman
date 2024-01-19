<?php

require_once "data/Category.php";

use Data\Category;

class Product
{
    public function __construct(public int $price = 10000 ,public Category $category = new Category(100, "hajir")){}
}

var_dump(new Product());