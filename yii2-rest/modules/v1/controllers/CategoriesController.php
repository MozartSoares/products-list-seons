<?php

namespace app\modules\v1\controllers;

use yii\rest\ActiveController;
use yii\filters\ContentNegotiator;
use yii\filters\Cors;
use yii\web\Response;

class CategoriesController extends ActiveController
{
    public $modelClass = 'app\models\Categories';


    public function behaviors()
    {
        $behaviors = parent::behaviors();

        // Configuração do ContentNegotiator para negociar respostas em formato JSON
        $behaviors['contentNegotiator'] = [
            'class' => ContentNegotiator::class,
            'formats' => [
                'application/json' => Response::FORMAT_JSON,
            ],
        ];
        
        $behaviors['corsFilter'] = [
            'class' => Cors::class,
            'cors' => [
                'Origin' => ['http://localhost:4200'],
                'Access-Control-Request-Method' => ['GET','OPTIONS'],
                'Access-Control-Allow-Credentials' => true,
            ],
        ];
        return $behaviors;
    }
}
