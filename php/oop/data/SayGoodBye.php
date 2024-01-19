<?php


namespace Data\Saying;

trait SayGoodBye{
    public string $name;
    public function goodBye(?string $name):string{
        if(is_null($name)){
            return "goodBye $this->name";
        }else{
            return "goodbye $name dari $this->name";
        }
    }    
}
trait Sayhello{
    public function hello(?string $name):string{
        if(is_null($name)){
            return "hello";
        }else{
            return "hello $name";
        }
    }    
}


class Saying{
    use SayGoodBye,Sayhello;
}


// function di class menang dengan trait , tetapi trait menang melawan parent class