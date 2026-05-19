# AprendaTudo

Plataforma de cursos online com lista de espera. Projeto full stack desenvolvido para portfólio, simulando um produto real com frontend, backend, banco de dados e infraestrutura containerizada.

## Tecnologias

**Frontend**
- React + TypeScript
- Vite
- TailwindCSS
- React Hook Form
- Axios

**Backend**
- Node.js + NestJS
- TypeORM
- PostgreSQL
- Redis
- JWT para autenticação

**Infra**
- Docker + Docker Compose
- Swagger (documentação da API)

## Funcionalidades

- Landing page com formulário de lista de espera
- Contador de inscritos em tempo real (polling a cada 10s)
- Validação de e-mail duplicado
- Painel admin protegido com JWT
- Listagem e exportação de leads em CSV
- API documentada com Swagger

## Como rodar localmente

**Pré-requisitos:** Node.js 18+, Docker Desktop

**1. Clone o repositório**

```bash
git clone https://github.com/joaopedrobagli/AprendaTud.git
cd AprendaTud
```

**2. Suba o banco de dados e Redis**

```bash
docker-compose up -d
```

**3. Configure o backend**

```bash
cd backend
cp .env.example .env
npm install
npm run start:dev
```

**4. Configure o frontend**

```bash
cd frontend
npm install
npm run dev
```

**5. Acesse**

- Landing page: http://localhost:5173
- Painel admin: http://localhost:5173/admin/login
- Swagger: http://localhost:3000/api

## Credenciais do admin

Configure no arquivo `backend/.env` as variáveis `ADMIN_EMAIL` e `ADMIN_PASSWORD`.

## Estrutura do projeto

```
AprendaTud/
├── frontend/         # React + TypeScript
├── backend/          # NestJS
└── docker-compose.yml
```