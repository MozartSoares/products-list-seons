<?php

return [
    'class' => 'yii\db\Connection',
    'dsn' => 'mysql:host=localhost;',
    'username' => 'root',
    'password' => '',
    'charset' => 'utf8',
    'on afterOpen' => function($event) {
        $db = $event->sender;
        $dbName = 'products-db';

        $command = $db->createCommand("CREATE DATABASE IF NOT EXISTS `$dbName`");
        $command->execute();

        $db->createCommand("USE `$dbName`")->execute();
    },
    // Schema cache options (for production environment)
    //'enableSchemaCache' => true,
    //'schemaCacheDuration' => 60,
    //'schemaCache' => 'cache',
];

