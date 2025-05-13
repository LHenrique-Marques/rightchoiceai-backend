# 🚗 Right Choice Ai

Este é o backend do projeto **RightChoiceAI**, desenvolvido por **Luis Henrique Marques Franque Flores** como parte de um projeto acadêmico da graduação em Análise e Desenvolvimento de Sistemas (UNISENAC).

A API foi construída utilizando as melhores práticas de desenvolvimento, com foco em escalabilidade, modularização e segurança.

---

## 🧰 Tecnologias Utilizadas
| Categoria        | Tecnologias                                                                                |
| ---------------- | ------------------------------------------------------------------------------------------ |
| **Framework**    | [NestJS](https://nestjs.com/), [TypeScript](https://www.typescriptlang.org/)               |
| **ORM & Banco**  | [Prisma](https://www.prisma.io/), [PostgreSQL](https://www.postgresql.org/)                |
| **Autenticação** | [JWT](https://jwt.io/), [Passport](http://www.passportjs.org/)                             |
| **Validação**    | `class-validator`, `class-transformer`                                                     |
| **Upload**       | [Multer](https://github.com/expressjs/multer)                                              |
| **Ambiente**     | [Dotenv](https://www.npmjs.com/package/dotenv), [CORS](https://www.npmjs.com/package/cors) |
| **Execução**     | `ts-node`, `tsconfig-paths`, `reflect-metadata`, `rxjs`                                    |

### ⚙️ Ferramentas de Desenvolvimento:
| Tipo              | Tecnologias                                      |
| ----------------- | ------------------------------------------------ |
| **CLI & Scripts** | `@nestjs/cli`, `prisma`, `ts-node`, `ts-loader`  |
| **Testes**        | `jest`, `supertest`, `@nestjs/testing` (se usar) |
| **Lint & Format** | `eslint`, `prettier`, `@typescript-eslint/*`     |
| **Tipos**         | `@types/*`                                       |


## 📁 Estrutura do Projeto

```
src/
├── auth/               # Módulo de autenticação (JWT)
├── ia/                # Integração e lógica de Inteligência Artificial
├── infra/             # Serviços utilitários e suporte da aplicação
├── prisma/             # Serviço de integração com o Prisma
├── veiculos/           # CRUD e lógica de veículos
├── users/             # Cadastro e gestão de usuários
├── app.module.ts
├── main.ts
```

Outros arquivos:
- `.env` e `.env.example`: variáveis de ambiente
- `prisma/schema.prisma`: definição dos modelos de banco de dados
- `package.json`: gerenciamento de dependências
- `tsconfig.json`: configuração do TypeScript

---

## ⚙️ Como Rodar o Projeto Localmente

1. **Clone o repositório:**
```bash
git clone https://github.com/LHenrique-Marques/rightchoiceai-backend.git
cd rightchoiceai-backend
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure o ambiente**
Crie um arquivo `.env` baseado em `.env.example`:

```
DATABASE_URL="mysql://root:210922@localhost:3306/right_choice_db"
```

4. **Rode as migrações com Prisma:**
```bash
npx prisma migrate dev --name init
```

5. **Inicie a aplicação:**
```bash
npm run start:dev
```

---

## 🔐 Funcionalidades

- ✅ Cadastro e login de usuários com criptografia de senha
- ✅ Autenticação com JWT
- ✅ Upload de arquivos com Multer
- ✅ Integração com PostgreSQL
- ✅ Estrutura em módulos com NestJS
- ✅ DTOs para validação de dados
- ✅ Prisma ORM com migração automática

---

## 📬 Rotas Principais

- `POST /auth/signup` → Cadastro de usuário
- `POST /auth/login` → Login com geração de token
- `GET /profile` → Perfil do usuário autenticado

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e pode ser utilizado livremente com os devidos créditos.

---

Desenvolvido com ❤️ por [Luis Henrique Marques Franque Flores](https://www.linkedin.com/in/luis-henrique-marques-franque-flores-508ba126b/)
