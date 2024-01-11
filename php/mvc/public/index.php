<?php

require_once __DIR__ . "/../vendor/autoload.php";
use User\Mvc\App\Router;
use User\Mvc\Controller\HomeController;

Router::add("GET","/",HomeController::class,"index" );
Router::add("GET","/hello",HomeController::class,"hello" );
Router::add("GET","/world",HomeController::class,"world" );

router::run();