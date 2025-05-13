
<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
</p>

<p align="center">
  <b>RightChoiceAI — Backend</b><br>
  Projeto acadêmico UNISENAC - Concessionária com Inteligência Artificial<br>
  Desenvolvido com <a href="https://nestjs.com/" target="_blank">NestJS</a> e <a href="https://www.prisma.io/" target="_blank">Prisma</a>
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="Versão NPM" />
  <img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Licença" />
  <img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="Downloads" />
</p>

---

## 📘 Descrição

Este projeto faz parte do sistema **RightChoiceAI**, uma solução moderna para revenda de veículos com integração de Inteligência Artificial (LangChain via FastAPI).

O backend é responsável por autenticação de usuários, cadastro e gestão de veículos, envio de arquivos (como imagens e documentos) e conexão com um microserviço de IA.

---

## 🚀 Tecnologias

- NestJS
- TypeScript
- MySQL
- Prisma ORM
- JWT (autenticação)
- Multer (upload de arquivos)
- Class-validator (validação)

---

## 📁 Funcionalidades

- ✅ Cadastro e login de usuários com hash e JWT
- ✅ CRUD completo de veículos
- ✅ Upload de arquivos com Multer
- ✅ Servidor de arquivos estáticos (`/uploads`)
- ✅ Validação de entrada com DTOs
- ✅ Integração futura com IA (endpoint pronto)

---

## 🔧 Instalação e uso

### 1. Clone o projeto
```bash
git clone https://github.com/Ceratt1/RightChoiceAI.git
cd RightChoiceAI/backend
```

### 2. Instale as dependências
```bash
yarn install
```

### 3. Configure o ambiente `.env`
```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/right_choice_db"
JWT_SECRET="sua_chave_secreta"
```

### 4. Rode as migrations
```bash
npx prisma migrate dev
```

### 5. Execute o servidor
```bash
yarn start:dev
```

---

## 📤 Upload de Arquivos

### Endpoint
```
POST /veiculos/upload
```

### Exemplo de resposta:
```json
{
  "mensagem": "Arquivo recebido com sucesso!",
  "caminho": "/uploads/file-171528123.png"
}
```

---

## 🔐 Autenticação

- `POST /auth/login` → retorna um token JWT
- Use o token nas rotas protegidas via header:

```
Authorization: Bearer <access_token>
```

---

## 🤖 Integração com IA

### Endpoint preparado:
```
POST /ia/sugerir
```

Aceita informações como perfil, orçamento e preferências. Em produção, isso será redirecionado para um microserviço Python com FastAPI + LangChain.

---

## 🧪 Scripts de Teste

```bash
# testes unitários
yarn test

# testes e2e
yarn test:e2e

# cobertura
yarn test:cov
```

---

## 📂 Organização

```
src/
├── auth/         # Login e JWT
├── usuarios/     # Usuários e cadastro
├── veiculos/     # CRUD de veículos e upload
├── ia/           # Integração com IA
├── infra/        # Prisma e banco
└── main.ts       # Bootstrap
```

---

## 👨‍🏫 Projeto Acadêmico

Este backend foi desenvolvido como parte do projeto **RightChoiceAI** no curso de Análise e Desenvolvimento de Sistemas do UniSenac — Campus Porto Alegre.

---

## 📄 Licença

Licenciado sob [MIT](https://opensource.org/licenses/MIT)
