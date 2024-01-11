<?php

#[Attribute(Attribute::TARGET_PROPERTY)]
class Length {
    public function __construct(public int $min , public int $max) {
    }
};
class Validate {
    #[Length(min:4 ,max:10)]
    #[NotBlank]
    public string $username;
};

class Individu{
    public function __construct(public string $id ,public string $name) {
    }
};


$data = new Individu(id:"1",name:"hajir");
var_dump($validasi);