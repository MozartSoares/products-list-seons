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
        $this->batchInsert('categories', ['id', 'name'], [
            [1, 'Roupas'],
            [2, 'Calçados'],
            [3, 'Eletrônicos'],
            [4, 'Esportes'],
            [5, 'Tecnologia'],
            [6, 'Livros'],
            [7, 'Material Escolar'],
            [8, 'Móveis'],
            [9, 'Higiene Pessoal'],
            [10, 'Casa e Decoração'],
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
        $this->batchInsert('products', ['id', 'name', 'quantity', 'categoryId'], [
            [1, 'Camisa Polo', 50, 1],
            [2, 'Calça Jeans', 40, 1],
            [3, 'Tênis Casual', 60, 1],
            [4, 'Vestido Floral', 30, 2],
            [5, 'Sapato de Salto', 20, 2],
            [6, 'Blusa de Tricô', 40, 2],
            [7, 'Smartphone', 50, 3],
            [8, 'Notebook', 25, 3],
            [9, 'Fone de Ouvido', 40, 3],
            [10, 'Bola de Futebol', 30, 4],
            [11, 'Raquete de Tênis', 20, 4],
            [12, 'Legging Esportiva', 40, 4],
            [13, 'TV LED', 30, 5],
            [14, 'Console de Videogame', 25, 5],
            [15, 'Câmera Fotográfica', 20, 5],
            [16, 'Livro de Romance', 30, 6],
            [17, 'Livro de Ficção Científica', 25, 6],
            [18, 'Livro de Autoajuda', 20, 6],
            [19, 'Caneta Esferográfica', 30, 7],
            [20, 'Caderno de Anotações', 25, 7],
            [21, 'Lápis de Cor', 20, 7],
            [22, 'Mesa de Jantar', 30, 8],
            [23, 'Sofá de Couro', 25, 8],
            [24, 'Guarda-Roupa', 20, 8],
            [25, 'Escova de Dentes', 30, 9],
            [26, 'Shampoo Anticaspa', 25, 9],
            [27, 'Sabonete Líquido', 20, 9],
            [28, 'Toalha de Banho', 30, 10],
            [29, 'Jogo de Cama', 25, 10],
            [30, 'Travesseiro de Penas', 20, 10],
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
