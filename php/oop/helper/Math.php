<?php


namespace Helper;

class MathHelper{
    public static function Math(int ...$numbers) : int{
        $currentNum = 0;
        foreach($numbers as $number){
            $currentNum += $number;
        }
        return $currentNum;
    }
}