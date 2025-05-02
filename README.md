
## Objetivo



<div align="center">

# Pokédex

</div>

## Descrição 📝

Projeto de aplicação desenvolvido no Módulo React Avançado do curso DevQuest.
Teste técnico onde a aplicação deveria consumir a API PokeAPI.
- Deveria ser criado uma Home com uma listagem de no mínimo 10 pokemons iniciais. 
- Deveria conter um botão para alternar o tema entre claro e escuro.
- Ao final da lista de pokemons na Home deveria ter um botão que ao ser clicado, deveria buscar mais 10 pokemons e adicionar a lista atual.
- A lista deveria conter a imagem e nome de cada pokemon.
- A listagem de cada pokemon deveria ser clicável e ao clicar deveria abrir uma página interna com detalhes de cada pokemon, que deveria conter:

    ◽ Imagem do pokemon <br>
    ◽ Nome <br>
    ◽ Lista de movimentos <br>
    ◽ Lista de habilidades <br>
    ➡ A lista de habilidades deveria apresentar o nome e o texto descritivo das habilidades <br>
    ◽Tipo do pokemon <br>

Desafio bônus:
- Implementar testes utilizando jest ou outra biblioteca para testes unitários;
- Fazer um campo com input de filtro ou select.

## Requisítos

- Aplicação deveria ser Single Page Application  (SPA);
- Usar o React.js para desenvolver a aplicação;
- Utilizar Context API para criação do Theme Toggler (Alternador entre tema);
- Utilizar Style-components para a estilização dos componentes;
- Utilizar React-router-dom para a navegação entre as páginas;
- Estilo do projeto livre;
- Estrutura do projeto livre;
- Padrão de implementação do código livre;
- Poderiamos implementar funcionalidades ou componentes sem fugir da simplicidade;
- Readme.md com todas as informações (funcionalidades, ferramentas, decisões adotadas, comando para o funcionamento do projeto na máquina do usuário).

Seria avaliado:
- Usabilidade;
- Criatividade;
- Boas práticas;
- Código limpo e organizado;
- Capacidade de tomada de decisão.

## Funcionalidades do Projeto✨
- **Visualização de Pokémon**: Exibe uma lista de Pokémon com nome, imagem e tipos.
- **Filtro por Tipo**: Permite filtrar a lista de Pokémon por nome ou ID.
- **Detalhes de Pokémon**: Ao clicar em um Pokémon da lista, são mostrados tipo, movimentos e habilidades.
- **Carregamento Dinâmico**: Ao rolar a página para baixo os pokemons serão carregados automaticamente.
- **Modo Escuro/Claro**: Alternância entre temas de interface (dark/light).

## Ferramentas Utilizadas 🛠️
- **React**: Biblioteca para criar interfaces de usuário dinâmicas e reativas.
- **Styled-Components**: Para estilização baseada em componentes, permitindo tema dinâmico e estilo modularizado.
- **Vite**: Ferramenta de construção para desenvolvimento front-end rápido e otimizado.
- **PokéAPI**: API pública usada para obter os dados dos Pokémon.
- **React Router DOM**: Gerenciamento de rotas para criar uma SPA (Single Page Application), permitindo navegação sem recarregar a página.

### Por que estas ferramentas ⁉️
- **React**: Escolhido pela sua eficiência e vasto ecossistema.
- **Styled-Components**: Oferece um sistema de estilos modular e com suporte a temas.
- **Vite**: Proporciona velocidade no desenvolvimento e configurações simples.
- **PokéAPI**: Uma API confiável e rica em dados de Pokémon.
- **React Router DOM**: Necessário para gerenciar rotas e criar uma experiência de SPA moderna.

## Decisões de Planejamento e Execução 📗
1. **Carregamento Dinâmico**:
   - Decidimos implementar carregamento dinâmico para melhorar a experiência do usuário e otimizar o consumo de dados.
2. **Filtro por Tipo**:
   - A funcionalidade de filtragem foi adicionada para facilitar a navegação e melhorar a usabilidade.
3. **Tema Escuro/Claro**:
   - Foi incluída a alternância de tema para atender preferências dos usuários e melhorar a acessibilidade.

## Passo a Passo para Rodar o Projeto 🚀

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   ```

2. **Acesse o diretório do projeto:**
   ```bash
   cd quest-teste-tecnico-pokedex
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador:**
   Abra o navegador e vá para `http://localhost:5173`.

## Estrutura do Projeto 🗂️
- **src/**: Contém o código-fonte principal da aplicação.
    - **assets/**: Arquivos estáticos, como imagens.
    - **components/**: Componentes reutilizáveis, como `Header`, `button`, e `Card`.
    - **contexts/**: Contextos para gerenciamento de estado, como tema.
    - **pages**: Contendo as rotas.
    - **style**: Contém o reset global.
## Técnologias utilizadas
[![My Skills](https://skillicons.dev/icons?i=js,html,react)](https://skillicons.dev)
## Layout 💻
<img src="./src/assets/animacao-pokedex.gif">