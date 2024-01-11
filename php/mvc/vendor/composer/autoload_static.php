<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitdfb0fc72c314e67fa4c6587054ae042b
{
    public static $prefixLengthsPsr4 = array (
        'U' => 
        array (
            'User\\Mvc\\' => 9,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'User\\Mvc\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitdfb0fc72c314e67fa4c6587054ae042b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitdfb0fc72c314e67fa4c6587054ae042b::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitdfb0fc72c314e67fa4c6587054ae042b::$classMap;

        }, null, ClassLoader::class);
    }
}