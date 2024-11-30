# Recipes App

Bem-vindo ao Recipes App! Este é um projeto desenvolvido para ajudar os usuários a encontrar e gerenciar receitas de comidas e bebidas. O aplicativo permite pesquisar receitas, visualizar detalhes, marcar receitas como favoritas, e acompanhar o progresso de receitas em andamento.

https://project-recipes-app-sage.vercel.app/

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Rotas](#rotas)
- [Contribuições](#contribuições)

## Tecnologias Utilizadas

- React
- TypeScript
- React Router DOM
- Context API
- Axios
- Bootstrap
- CSS Modules
- ESLint
- Stylelint
- Vitest
- Cypress

## Funcionalidades

- Pesquisa de receitas por nome, ingrediente ou primeira letra.
- Visualização de detalhes de receitas, incluindo ingredientes, instruções e vídeos.
- Marcar receitas como favoritas e gerenciar a lista de receitas favoritas.
- Acompanhar o progresso de receitas em andamento.
- Compartilhar receitas com um link direto.
- Filtrar receitas concluídas por tipo (comida ou bebida).

## Estrutura do Projeto

```plaintext
src/
    App.tsx
    Components/
        Cards/
        Footer/
        Header/
        Layout/
        Loading/
        LoginForm/
        Recepies/
        ReturnToHomeButton/
        SearchBar/
    Context/
        AppContext.ts
        AppProvider.tsx
    Hooks/
        useDoneRecipes.tsx
        useLocalStorage.tsx
    images/
    index.css
    main.tsx
    Pages/
        ...
    tests/
        ...
    types.ts
    Utils/
        ...
    vite-env.d.ts
```

## Rotas

/ Página de login.

/meals Página principal de receitas de comidas.

/meals/:id Página de detalhes de uma receita de comida.

/meals/:id/in-progress Página de progresso de uma receita de comida.

/drinks Página principal de receitas de bebidas.

/drinks/:id Página de detalhes de uma receita de bebida.

/drinks/:id/in-progress Página de progresso de uma receita de bebida.

/profile Página de perfil do usuário.

/done-recipes Página de receitas concluídas.

/favorite-recipes Página de receitas favoritas.


## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

