<?php

declare(strict_types=1);

namespace User\UnitTest;

use PHPUnit\Framework\TestCase;

final class TestCounter extends TestCase
{
    /** @test */
    public function CounterOnly(): void
    {
        $counter = new Counter();
        $counter->increment();
        self::assertEquals(1, $counter->getCounter());
    }
}
