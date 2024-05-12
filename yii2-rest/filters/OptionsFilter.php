<?php

namespace app\filters;

use Yii;
use yii\base\ActionFilter;

class OptionsFilter extends ActionFilter
{
    public function beforeAction($action)
    {
        if (Yii::$app->request->isOptions) {
            Yii::$app->response->statusCode = 200;
            return false;
        }
        return parent::beforeAction($action);
    }
}
