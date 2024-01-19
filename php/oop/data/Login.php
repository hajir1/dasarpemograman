<?php

// function final tidak bisa di overriding
namespace Data;
class Login {
    final function loginFacebook(?string $username , ?string $password):bool
    {
        return true;
    }
}

class Register extends Login{
    public function loginFacebook(?string $username , ?string $password):bool
    {
        return false;
    }
}


