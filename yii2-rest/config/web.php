<?php

$params = require __DIR__ . '/params.php';
$db = require __DIR__ . '/db.php';

$config = [
    'id' => 'basic',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm'   => '@vendor/npm-asset',
    ],
    'modules' => [
        'v1' => [
            'class' => 'app\modules\v1\Module',
            'controllerNamespace' => 'app\modules\v1\controllers',
        ],
    ],
    'components' => [
        'request' => [
            // !!! insert a secret key in the following (if it is empty) - this is required by cookie validation
            'cookieValidationKey' => 'cgoQP9LeM7am2r9qVQ1LEL0vKVVTbByV',
            'parsers' => [
            'application/json' => 'yii\web\JsonParser',
        ],
        ],
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
        'user' => [
            'identityClass' => 'app\models\User',
            'enableAutoLogin' => true,
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'mailer' => [
            'class' => \yii\symfonymailer\Mailer::class,
            'viewPath' => '@app/mail',
            // send all mails to a file by default.
            'useFileTransport' => true,
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'db' => $db,
        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
            //Rotas para categories
            'GET v1/categories' => 'v1/categories/index',
            'GET v1/categories/<id:\d+>' => 'v1/categories/view',
            'POST v1/categories' => 'v1/categories/create',
            'PUT v1/categories/<id:\d+>' => 'v1/categories/update',
            'DELETE v1/categories/<id:\d+>' => 'v1/categories/delete',
            // Rotas para produtos
            'GET v1/products' => 'v1/products/index',
            'GET v1/products/<id:\d+>' => 'v1/products/view',
            'POST v1/products' => 'v1/products/create',
            'PUT v1/products/<id:\d+>' => 'v1/products/update',
            'DELETE v1/products/<id:\d+>' => 'v1/products/delete',
            'OPTIONS v1/products' => 'v1/products/options',
            'OPTIONS v1/products/<id:\d+>' => 'v1/products/options',
            ],
        ],
    ],
    'params' => $params,
];

if (YII_ENV_DEV) {
    // configuration adjustments for 'dev' environment
    $config['bootstrap'][] = 'debug';
    $config['modules']['debug'] = [
        'class' => 'yii\debug\Module',
        // uncomment the following to add your IP if you are not connecting from localhost.
        //'allowedIPs' => ['127.0.0.1', '::1'],
    ];

    $config['bootstrap'][] = 'gii';
    $config['modules']['gii'] = [
        'class' => 'yii\gii\Module',
        // uncomment the following to add your IP if you are not connecting from localhost.
        //'allowedIPs' => ['127.0.0.1', '::1'],
    ];
}

return $config;
