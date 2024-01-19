<?php
use Helper\Logins;

function validateLoginRequest(Logins $loginRequest ) {
    if(!isset($loginRequest->password)){
        throw new Exception("password tidak boleh kosong");
    }else if(!isset($loginRequest->username)){
        throw new Exception("username tidak boleh kosong");
    }
}