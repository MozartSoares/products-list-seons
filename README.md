# Lista de Produtos 📋

Bem-vindo ao projeto Lista de Produtos! Este é um aplicativo com front-end desenvolvido com Angular e backend desenvolvido com Yii2, com o objetivo de fornecer uma lista de produtos de forma minimalista, performática e eficiente. 🚀

## Front-end

### Funcionalidades

- **Filtragem Dinâmica:** Permite filtrar os produtos por nome ou categoria, proporcionando uma experiência de busca intuitiva. 🔍
- **Ordenação Alfabética:** Os produtos são organizados de forma alfabética para facilitar a busca e a navegação. 📝
- **Paginação:** Divide a lista de produtos em páginas, facilitando a navegação. 📄
- **CRUD de Produtos:** Possibilita criar, visualizar, editar e excluir produtos. ✏️ 🗑️
- **Validação de Formulários:** Utiliza a validação de formulários do Angular para garantir dados válidos e consistentes. ✅
- **UI Responsiva e Amigável:** Utiliza o framework Bootstrap para criar componentes responsivos e amigáveis. 🎨
- **Componentes Reutilizáveis:** O código é modular e escalável, com componentes reutilizáveis para acelerar o desenvolvimento e manter a consistência da UI. 🔄
- **Loader para Melhor UX:** Implementa loaders para indicar carregamento de dados e melhorar a experiência do usuário durante as interações. ⏳

### Como Executar o Projeto

1. Instale as dependências do projeto:
    ```
    npm install
    ```

2. Inicie o aplicativo Angular:
    ```
    ng serve
    ```

3. Acesse o aplicativo no navegador em [http://localhost:4200/](http://localhost:4200/). 🌐

## Back-end

### Funcionalidades

- **Conexão com Backend Yii2:** Integrado com uma API backend desenvolvida em Yii2, permitindo operações CRUD de produtos e categorias.
- **Banco de Dados MySQL:** Utiliza um banco de dados MySQL para armazenar os dados dos produtos e categorias.
- **Migrações Automáticas:** A API cria automaticamente o banco de dados e suas tabelas quando utiliza o comando `php yii migrate`.
- **Controllers para Manipulação de Dados:** Utiliza dois controllers para manipular o banco de dados através das operações CRUD.

### Como Executar o Projeto

1. Instale as dependências do projeto com Composer:
    ```
    composer install
    ```

2. Inicie o servidor PHP para rodar a API na porta 8000:
    ```
    php -S 127.0.0.1:8000
    ```

3. Execute as migrações para criar o banco de dados e as tabelas:
    ```
    php yii migrate
    ```

## Telas e Rotas

O aplicativo possui duas telas acessíveis por diferentes rotas:
- **Dashboard Inicial:** A rota `/` exibe o dashboard inicial com a lista de produtos.
- **Criar Novos Produtos:** A rota `/new` permite criar novos produtos. ➕

## Modo de Visualização e Edição

Ao clicar em um produto no dashboard, você pode:
- **Visualizar:** Visualizar os detalhes do produto.
- **Editar:** Editar os dados do produto, incluindo nome, quantidade e categoria. 🖊️

## Design e Arquitetura

- **Minimalismo e Paleta de Cores:** O design foi criado com um estilo minimalista, seguindo a paleta de cores da empresa.
- **Atomic Design:** A UI foi desenvolvida seguindo o conceito de Atomic Design, visando a reutilização de componentes para acelerar o desenvolvimento e garantir a escalabilidade.
- **Bootstrap:** Utiliza o framework Bootstrap para criar componentes responsivos e melhorar a consistência visual da aplicação. 🎨

---

Obrigado por conferir o projeto Lista de Produtos! 🚀
