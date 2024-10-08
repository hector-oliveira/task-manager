# Gerenciador de Tarefas

## Visão Geral

O Gerenciador de Tarefas é uma aplicação que permite aos usuários adicionar, visualizar e navegar entre tarefas. Ele possui um formulário para adicionar novas tarefas com título e descrição, e uma lista que renderiza as tarefas adicionadas. Ao clicar em uma tarefa, o usuário é levado a uma tela de descrição detalhada da tarefa.

## Capturas de Tela

### Tela Inicial

![Tela Inicial](https://i.imgur.com/VndJzyR.png[/img])

### Descrição da Tarefa

![Descrição da Tarefa](https://i.imgur.com/L8gcU6C.png[/img])

## Instalação

Para instalar e executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```sh
   git clone <https://github.com/hector-oliveira/task-manager.git>
   ```
2. Navegue até o diretório do projeto:
   ```sh
   cd task-manager
   ```
3. Instale as dependências com o gerenciador de pacotes de sua preferência:

   ```sh
   npm run dev
   ```

   ```sh
   yarn dev
   ```

   ```sh
   pnpm dev
   ```

4. Inicie a aplicação com o gerenciador de pacotes de sua preferência :
   ```sh
   npm run dev
   ```
   ```sh
   yarn dev
   ```
   ```sh
   pnpm dev
   ```

## Uso

1. Abra o navegador e acesse `http://localhost:5173/`.
2. Utilize o formulário para adicionar novas tarefas inserindo um título e uma descrição.
3. As tarefas adicionadas serão exibidas em uma lista.
4. Clique no ícone com a seta para direita para visualizar a descrição detalhada.
5. Clique no ícone da lixeira para deletar uma tarefa
6. Na tarefa adicionada é possível clicar para marcar como concluída.
7. As tarefas são armazenadas no LocalStorage.
8. Caso limpe o histórico do navegador, todas as tarefas serão deletadas

## Componentes Principais

### Formulário de Tarefas

- **Descrição**: Componente que contém dois inputs, um para o título da tarefa e outro para a descrição.
- **Função**: Permite ao usuário adicionar novas tarefas.

### Lista de Tarefas

- **Descrição**: Componente que renderiza todas as tarefas adicionadas.
- **Função**: Exibe as tarefas em uma lista e permite a navegação para a tela de descrição da tarefa ao clicar em uma tarefa.

### Tela de Descrição da Tarefa

- **Descrição**: Componente que exibe a descrição detalhada de uma tarefa selecionada.
- **Função**: Permite ao usuário visualizar os detalhes completos de uma tarefa específica.
