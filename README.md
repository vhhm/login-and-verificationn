🇺🇸 | PS: Create a folder called "server" and put all the files there.

🇧🇷 | PS: Crie uma pasta antes chamada "server" e bote todos os arquivos

```markdown
<img src="" alt="Anime" width="600">

# Anime Login

---

## 🇧🇷 Descrição

Projeto de **autenticação moderna** com:

- **Login**, **Registro** e **Verificação por Email**
- **Fundo de anime animado** com partículas flutuantes
- **Popups de feedback** diretamente na tela
- Redirecionamento automático após verificação para [https://xisde.fun](https://xisde.fun)

💡 Funcionalidades:

- Login com email e senha.
- Registro com hash de senha (bcrypt).
- Envio de código de verificação por email (Nodemailer).
- Interface moderna e responsiva com efeitos de fade, blur e partículas animadas.

🛠 Tecnologias Utilizadas:

- **Backend:** Node.js, Express, MongoDB, Mongoose, bcrypt, JWT, Nodemailer
- **Frontend:** HTML5, CSS3, Vanilla JS
- **Efeitos Visuais:** Canvas para partículas, blur e animações CSS
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

## ⚙️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seuusuario/anime-login.git
cd anime-login
````

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` na raiz com:

```
PORT=3000
MONGO_URI=SEU_MONGODB_URI
JWT_SECRET=SUA_CHAVE_SECRETA
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=SEU_EMAIL@gmail.com
EMAIL_PASS=SUA_SENHA_DE_APP
FROM_NAME=SEU_NOME
FROM_EMAIL=SEU_EMAIL@gmail.com
CODE_EXP_MIN=15
```

> 🔒 Para Gmail, crie uma **senha de app** no [Google Account > Security > App Passwords](https://myaccount.google.com/apppasswords).

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
2. **Cadastro:** Clique em "Cadastrar nova conta", informe nome, email e senha.
3. **Verificação:** Digite o código enviado para seu email.
4. Após verificação, você será redirecionado para [https://xisde.fun](https://xisde.fun).

---

## 📜 Licença

MIT License

---

## 🇺🇸 Description

Modern authentication project with:

* **Login**, **Register**, and **Email Verification**
* **Animated anime background** with floating particles
* **On-screen feedback popups**
* Auto-redirect after verification to [https://xisde.fun](https://xisde.fun)

💡 Features:

* Login with email and password.
* Registration with hashed password (bcrypt).
* Send verification code via email (Nodemailer).
* Modern responsive UI with fade, blur, and particle effects.

🛠 Technologies Used:

* **Backend:** Node.js, Express, MongoDB, Mongoose, bcrypt, JWT, Nodemailer
* **Frontend:** HTML5, CSS3, Vanilla JS
* **Visual Effects:** Canvas particles, CSS blur & animations
* **Environment Management:** dotenv

---

## ⚙️ Setup

1. Clone the repo:

```bash
git clone https://github.com/yourusername/anime-login.git
cd anime-login
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```
PORT=3000
MONGO_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_SECRET_KEY
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=YOUR_EMAIL@gmail.com
EMAIL_PASS=APP_PASSWORD
FROM_NAME=YOUR_NAME
FROM_EMAIL=YOUR_EMAIL@gmail.com
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

1. **Login:** Enter your email and password.
2. **Register:** Click "Register", fill name, email and password.
3. **Verify:** Enter the code sent to your email.
4. After verification, you will be redirected to [https://xisde.fun](https://xisde.fun).

---

## 📜 License

MIT License
```
