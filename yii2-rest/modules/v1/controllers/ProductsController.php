<?php

namespace app\modules\v1\controllers;

use yii\rest\ActiveController;
use yii\filters\ContentNegotiator;
use yii\filters\Cors;
use yii\web\Response;

class ProductsController extends ActiveController
{
    public $modelClass = 'app\models\Products';

    public function behaviors()
    {
        $behaviors = parent::behaviors();

        // Configuração do ContentNegotiator para retornar respostas em formato JSON
        $behaviors['contentNegotiator'] = [
            'class' => ContentNegotiator::class,
            'formats' => [
                'application/json' => Response::FORMAT_JSON,
            ],
        ];

        // remove authentication filter
        $auth = $behaviors['authenticator'];
        unset($behaviors['authenticator']);
        

        // Adicionar o filtro CORS para permitir solicitações de http://localhost:4200
        $behaviors['corsFilter'] = [
            'class' => Cors::class,
            'cors' => [
                'Origin' => ['http://localhost:4200'],
                'Access-Control-Request-Method' => ['*'],
                'Access-Control-Allow-Credentials' => true,
                'Access-Control-Max-Age' => 86400,
                'Access-Control-Request-Headers' => ['Origin', 'X-Requested-With', 'Content-Type', 'accept', 'Authorization']
            ],
        ];

        // re-add authentication filter
        $behaviors['authenticator'] = $auth;
        // avoid authentication on CORS-pre-flight requests (HTTP OPTIONS method)
        $behaviors['authenticator']['except'] = ['options'];


        return $behaviors;
    }

    

    public function actionOptions()
    {
        \Yii::$app->response->format = Response::FORMAT_JSON;
        return ['message' => 'OK']; // Responder a solicitação OPTIONS com um status 200 OK
    }


}
