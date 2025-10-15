```markdown
# Anime Login 🚀

![GitHub repo size](https://img.shields.io/github/repo-size/seuusuario/anime-login?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/seuusuario/anime-login?style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/seuusuario/anime-login?style=for-the-badge)
![License](https://img.shields.io/github/license/seuusuario/anime-login?style=for-the-badge)

---

## 🇧🇷 Descrição

Este projeto é uma **página de autenticação moderna** com **login**, **registro** e **verificação por email**, usando **Node.js**, **Express**, **MongoDB**, **bcrypt** e **JWT**, com um frontend estilizado e animado com **partículas sobre um fundo de anime**.

💡 Funcionalidades:

- Login com email e senha.
- Registro de novas contas com hash de senha (bcrypt).
- Envio de código de verificação por email (Nodemailer).
- Redirecionamento após verificação para um site externo (`https://xisde.fun/`).
- Popups de mensagens diretamente na tela.
- UI moderna e responsiva com efeitos de fade, blur e partículas animadas.

🛠 Tecnologias Utilizadas:

- **Backend:** Node.js, Express, MongoDB, Mongoose, bcrypt, JWT, Nodemailer
- **Frontend:** HTML5, CSS3, JavaScript (vanilla)
- **Efeitos visuais:** Canvas para partículas, blur e animações CSS
- **Gerenciamento de ambiente:** dotenv

---

## ⚡ Estrutura do Projeto

```

anime-login/
│
├─ server/
│  ├─ server.js
│  ├─ routes/auth.js
│  ├─ models/User.js
│  └─ utils/mailer.js
│
├─ public/
│  ├─ index.html
│  ├─ verify.html
│  ├─ style.css
│  └─ app.js
│
├─ .env
├─ package.json
└─ README.md

````

---

## ⚙️ Instalação e Configuração

1. Clone o repositório:

```bash
git clone https://github.com/seuusuario/anime-login.git
cd anime-login
````

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` na raiz com as seguintes variáveis:

```
PORT=3000
MONGO_URI=sua_mongodb_uri
JWT_SECRET=sua_chave_secreta
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=seu_email@gmail.com
EMAIL_PASS=sua_senha_app
FROM_NAME=SeuNome
FROM_EMAIL=seu_email@gmail.com
CODE_EXP_MIN=15
```

> 🔒 Obs: Para Gmail, é necessário criar uma senha de app para Nodemailer.

4. Inicie o servidor:

```bash
node server/server.js
```

5. Acesse no navegador:

```
http://localhost:3000
```

---

## 📌 Uso

1. **Login:** Digite seu email e senha.
2. **Cadastro:** Clique em "Cadastre-se", preencha nome, email e senha.
3. **Verificação:** Digite o código enviado para o email.
4. Após verificação, você será redirecionado para `https://xisde.fun/`.

---

## 📜 Licença

Este projeto está sob a licença **MIT**.

---

## 🇺🇸 Description

This project is a **modern authentication page** with **login**, **register**, and **email verification**, using **Node.js**, **Express**, **MongoDB**, **bcrypt**, and **JWT**, with a styled frontend animated with **particles over an anime background**.

💡 Features:

* Login with email and password.
* Register new accounts with password hashing (bcrypt).
* Send verification code via email (Nodemailer).
* Redirect after verification to external site (`https://xisde.fun/`).
* Popups displayed directly on screen.
* Modern responsive UI with fade, blur, and particle effects.

🛠 Technologies Used:

* **Backend:** Node.js, Express, MongoDB, Mongoose, bcrypt, JWT, Nodemailer
* **Frontend:** HTML5, CSS3, Vanilla JS
* **Visual effects:** Canvas particles, CSS blur and animations
* **Environment management:** dotenv

---

## ⚡ Project Structure

```
anime-login/
│
├─ server/
│  ├─ server.js
│  ├─ routes/auth.js
│  ├─ models/User.js
│  └─ utils/mailer.js
│
├─ public/
│  ├─ index.html
│  ├─ verify.html
│  ├─ style.css
│  └─ app.js
│
├─ .env
├─ package.json
└─ README.md
```

---

## ⚙️ Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/anime-login.git
cd anime-login
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with:

```
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=app_password
FROM_NAME=YourName
FROM_EMAIL=your_email@gmail.com
CODE_EXP_MIN=15
```

4. Start the server:

```bash
node server/server.js
```

5. Open your browser:

```
http://localhost:3000
```

---

## 📌 Usage

1. **Login:** Enter email and password.
2. **Register:** Click "Register", fill name, email, and password.
3. **Verify:** Enter code sent to your email.
4. After verification, you will be redirected to `https://xisde.fun/`.

---

## 📜 License

This project is licensed under the **MIT License**.
```
