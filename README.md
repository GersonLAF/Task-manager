# Gerenciador de Tarefas

Este projeto é uma aplicação web de gerenciamento de tarefas desenvolvida com Next.js, Prisma, PostgreSQL e Clerk.

O sistema permite que usuários autenticados criem, visualizem e excluam tarefas de forma simples e organizada. Todas as informações são armazenadas em um banco de dados PostgreSQL, garantindo a persistência dos dados.

A autenticação é realizada através do Clerk, permitindo que cada usuário acesse seu próprio ambiente de tarefas. A comunicação com o banco de dados é feita utilizando Prisma ORM, facilitando as operações de criação, consulta e exclusão dos registros.

## Funcionalidades

* Autenticação de usuários com Clerk
* Criação de tarefas
* Listagem de tarefas
* Exclusão de tarefas
* Interface simples e responsiva
* Persistência de dados com PostgreSQL
* Integração com Prisma ORM

## Tecnologias Utilizadas

* Next.js
* TypeScript
* Prisma ORM
* PostgreSQL
* Clerk
* Docker
* Tailwind CSS

## Como executar o projeto

### Clonar o repositório

```bash
git clone https://github.com/GersonLAF/Task-manager.git
```

### Instalar dependências

```bash
npm install
```

### Subir o banco de dados

```bash
docker compose up -d
```

### Executar migrações

```bash
npx prisma migrate dev
```

### Iniciar aplicação

```bash
npm run dev
```
## Estrutura do Projeto

```text
src/
├── app/
├── actions/
├── components/
├── lib/
├── prisma/
└── generated/
```
## Autor

Gerson Lucas Araújo Figueira

Tecnólogo em Sistemas para Internet - IFMA Campus Timon

