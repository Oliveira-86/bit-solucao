# Monorepo - Backend + Frontend + MySQL

Estrutura inicial de monorepo com:
- Backend: Node.js + Express.js
- Frontend: Next.js (App Router)
- Banco: MySQL (Docker)

## Estrutura

```txt
.
├── apps
│   ├── backend
│   └── frontend
├── infra
│   └── mysql
├── docker-compose.yml
└── package.json
```

## Pré-requisitos

- Node.js 20+
- npm 10+
- Docker + Docker Compose

## Como rodar

1. Subir o MySQL:

```bash
npm run db:up
```

2. Instalar dependências:

```bash
npm install
```

3. Rodar backend e frontend em paralelo:

```bash
npm run dev
```

## Apps

- Frontend: http://localhost:3000
- Backend: http://localhost:4000
- Health check backend: http://localhost:4000/api/health

## Variáveis de ambiente

Copie os arquivos de exemplo:

```bash
cp apps/backend/.env.example apps/backend/.env
cp apps/frontend/.env.local.example apps/frontend/.env.local
```
