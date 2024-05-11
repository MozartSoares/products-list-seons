<?php

use yii\db\Migration;

/**
 * Class m240511_050756_migration
 */
class m240511_050756_migration extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        // Criar a base de dados se ainda não existir
        $this->execute('CREATE DATABASE IF NOT EXISTS `products-db`');

        // Usar a base de dados products-db
        $this->execute('USE `products-db`');

        // Criar a tabela categories
        $this->createTable('categories', [
            'id' => $this->primaryKey(),
            'name' => $this->string(255)->notNull(),
        ]);

        // Inserir os dados na tabela categories
        $this->batchInsert('categories', ['name'], [
            ['Eletrônicos'],
            ['Roupas'],
            ['Alimentos'],
            ['Bebidas'],
            ['Livros'],
            ['Ferramentas'],
        ]);

        // Criar a tabela products
        $this->createTable('products', [
            'id' => $this->primaryKey(),
            'name' => $this->string(255)->notNull(),
            'quantity' => $this->integer(),
            'categoryId' => $this->integer(),
        ]);

        // Adicionar a chave estrangeira para categoryId na tabela products
        $this->addForeignKey(
            'fk-products-categoryId',
            'products',
            'categoryId',
            'categories',
            'id',
            'CASCADE',
            'CASCADE'
        );

        // Inserir os dados na tabela products
        $this->batchInsert('products', ['name', 'quantity', 'categoryId'], [
            ['Smartphone Samsung', 100, 1],
            ['Laptop Dell', 50, 1],
            ['Fone de Ouvido Sony', 200, 1],
            ['TV LG', 30, 1],
            ['Tablet Apple', 80, 1],
            ['Camiseta Branca', 150, 2],
            ['Calça Jeans', 120, 2],
            ['Tênis Nike', 90, 2],
            ['Vestido Floral', 70, 2],
            ['Casaco de Inverno', 40, 2],
            ['Arroz Integral', 300, 3],
            ['Feijão Carioca', 250, 3],
            ['Macarrão Espaguete', 180, 3],
            ['Óleo de Soja', 200, 3],
            ['Leite Integral', 150, 3],
            ['Refrigerante Coca-Cola', 400, 4],
            ['Água Mineral', 500, 4],
            ['Suco de Laranja', 300, 4],
            ['Cerveja Heineken', 200, 4],
            ['Vinho Tinto', 100, 4],
            ['Harry Potter e a Pedra Filosofal', 80, 5],
            ['O Senhor dos Anéis', 120, 5],
            ['Dom Casmurro', 150, 5],
            ['1984', 100, 5],
            ['A Arte da Guerra', 90, 5],
            ['Martelo', 50, 6],
            ['Chave de Fenda', 70, 6],
            ['Serra Elétrica', 20, 6],
            ['Parafusadeira', 40, 6],
            ['Broca de Metal', 60, 6],
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        // Drop da tabela products
        $this->dropTable('products');

        // Drop da tabela categories
        $this->dropTable('categories');

        // Drop da base de dados products-db
        $this->execute('DROP DATABASE IF EXISTS `products-db`');
    }
}
