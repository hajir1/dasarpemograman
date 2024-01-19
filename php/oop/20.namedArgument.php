<?php

function sayHello(string $firstName, string $lastName, ?string $middleName = ""): void {
    echo "Hello $firstName $middleName $lastName";
}

sayHello(firstName: "Usam", lastName: "Muhajir");
