# Lista de Produtos 📋

Bem-vindo ao projeto Lista de Produtos! Este é um aplicativo desenvolvido com Angular, com o objetivo de fornecer uma lista de produtos de forma minimalista e eficiente. 🚀

## Funcionalidades

- **Filtragem Dinâmica:** Permite filtrar os produtos com base em termos de pesquisa. 🔍
- **Paginação:** Divide a lista de produtos em páginas, facilitando a navegação. 📄
- **CRUD de Produtos:** Possibilita criar, visualizar, editar e excluir produtos. ✏️ 🗑️
- **Conexão Temporária com JSON Server:** Utiliza JSON Server para simular requisições à API até que a API backend esteja pronta. 🛠️
- **Validação de Formulários:** Utiliza a validação de formulários do Angular para garantir dados válidos e consistentes. ✅
- **UI Responsiva e Amigável:** Utiliza o framework Bootstrap para criar componentes responsivos e amigáveis. 🎨
- **Componentes Reutilizáveis:** O código é modular e escalável, com componentes reutilizáveis para acelerar o desenvolvimento e manter a consistência da UI. 🔄
- **Loader para Melhor UX:** Implementa loaders para indicar carregamento de dados e melhorar a experiência do usuário durante as interações. ⏳

## Como Executar o Projeto

1. Instale as dependências do projeto:
    ```
    npm install
    ```

2. Inicie o servidor JSON Server (simulando a API):
    ```
    npm run server
    ```

3. Inicie o aplicativo Angular:
    ```
    ng serve
    ```

4. Acesse o aplicativo no navegador em [http://localhost:4200/](http://localhost:4200/). 🌐

## Telas e Rotas

O aplicativo possui duas telas acessíveis por diferentes rotas:
- **Dashboard Inicial:** A rota `/` exibe o dashboard inicial com a lista de produtos.
- **Criar Novos Produtos:** A rota `/new` permite criar novos produtos. ➕

## Modo de Visualização e Edição

Ao clicar em um produto no dashboard, você pode:
- **Visualizar:** Visualizar os detalhes do produto.
- **Editar:** Editar os dados do produto, incluindo nome, quantidade e categoria. 🖊️

## Backend

Este projeto foi desenvolvido com foco no futuro backend, que irá utilizar um banco de dados com duas tabelas: categorias e produtos. O ID dos produtos funciona como chave estrangeira conectando-se com o `categoryId`. Os dados são automaticamente convertidos no frontend.

Em breve, uma API backend desenvolvida em Yii2 será disponibilizada para servir este frontend. 🛠️

## Design e Arquitetura

- **Minimalismo e Paleta de Cores:** O design foi criado com um estilo minimalista, seguindo a paleta de cores da empresa.
- **Atomic Design:** A UI foi desenvolvida seguindo o conceito de Atomic Design, visando a reutilização de componentes para acelerar o desenvolvimento e garantir a escalabilidade.
- **Bootstrap:** Utiliza o framework Bootstrap para criar componentes responsivos e melhorar a consistência visual da aplicação. 🎨

---

Obrigado por conferir o projeto Lista de Produtos! 🚀
