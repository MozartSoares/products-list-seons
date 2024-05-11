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

        // Criar o banco de dados se ainda não existir
        $command = $db->createCommand("CREATE DATABASE IF NOT EXISTS `$dbName`");
        $command->execute();

        // Usar o banco de dados recém-criado
        $db->createCommand("USE `$dbName`")->execute();
    },
    // Schema cache options (for production environment)
    //'enableSchemaCache' => true,
    //'schemaCacheDuration' => 60,
    //'schemaCache' => 'cache',
];

