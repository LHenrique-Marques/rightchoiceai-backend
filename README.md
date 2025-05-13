# 🚗 Right Choice Ai

Este é o backend do projeto **RightChoiceAI**, desenvolvido por **Luis Henrique Marques Franque Flores** como parte de um projeto acadêmico da graduação em Análise e Desenvolvimento de Sistemas (UNISENAC).

A API foi construída utilizando as melhores práticas de desenvolvimento, com foco em escalabilidade, modularização e segurança.

---

## 🧰 Tecnologias Utilizadas

### Principais:
- **@nestjs/common**
- **@nestjs/config**
- **@nestjs/core**
- **@nestjs/jwt**
- **@nestjs/mapped-types**
- **@nestjs/passport**
- **@nestjs/platform-express**
- **@nestjs/serve-static**
- **@prisma/client**
- **@types/uuid**
- **class-transformer**
- **class-validator**
- **cors**
- **jsonwebtoken**
- **multer**
- **mysql2**
- **passport**
- **passport-jwt**
- **reflect-metadata**
- **rxjs**
- **swagger-ui**
- **uuid**

### Desenvolvimento:
- @nestjs/cli
- @nestjs/schematics
- @nestjs/testing
- @types/express
- @types/jest
- @types/multer
- @types/node
- @types/passport-jwt
- @types/supertest
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint
- eslint-config-prettier
- eslint-plugin-prettier
- express
- jest
- prettier
- prisma
- source-map-support
- supertest
- ts-jest
- ts-loader
- ts-node
- tsconfig-paths
- typescript

---

## 📁 Estrutura do Projeto

```
src/
├── auth/               # Módulo de autenticação (JWT)
├── prisma/             # Serviço de integração com o Prisma
├── veiculos/           # CRUD e lógica de veículos
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

- ✅ Autenticação com JWT
- ✅ Upload de arquivos com Multer
- ✅ Integração com PostgreSQL
- ✅ Estrutura em módulos com NestJS
- ✅ DTOs para validação de dados
- ✅ Prisma ORM com migração automática

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e pode ser utilizado livremente com os devidos créditos.

---

Desenvolvido com ❤️ por [Luis Henrique Marques Franque Flores](https://www.linkedin.com/in/luis-henrique-marques-franque-flores-508ba126b/)
