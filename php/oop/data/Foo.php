<?php

namespace Data;
class Foo {
    public function getCorner():int{
        return 0;
    }
}
class Bar extends Foo{
    public function getCorner():int{
        return 4;
    }
    public function getParentCorner():int{
        return parent::getCorner();
    }
}