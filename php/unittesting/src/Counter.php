<?php declare(strict_types=1);
namespace User\UnitTest;
final class Counter
{
    public int $counter =1;
    public function increment():void {
        $this->$counter ++; 
    }
    public function getCounter():int{
        return $this->$counter;
    }
}