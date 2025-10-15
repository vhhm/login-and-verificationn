Beleza! Vamos fazer o **README ultimate** para o seu projeto de autenticação com fundo de anime, badges animados e estilo profissional, pronto para GitHub. 😎

Aqui está pronto para copiar e colar:

```markdown
# 🌸 Modern Anime Login & Registration with Email Verification

![Project Status](https://img.shields.io/badge/status-in%20development-yellow?style=for-the-badge&logo=github) 
![Node.js](https://img.shields.io/badge/Node.js-v21-green?style=for-the-badge&logo=node.js) 
![MongoDB](https://img.shields.io/badge/MongoDB-v7.4-green?style=for-the-badge&logo=mongodb) 
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge) 

![Anime Background](https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif)  

---

## 🇧🇷 Descrição

**Anime Login** é uma página de autenticação moderna com **login, registro e verificação por email**, usando **Node.js, Express, MongoDB, bcrypt e JWT**, com **frontend animado com partículas flutuantes sobre um fundo de anime**.

### 📝 Funcionalidades

- Login com email e senha  
- Registro de novas contas com hash de senha (bcrypt)  
- Envio de código de verificação por email (Nodemailer)  
- Redirecionamento após verificação para [https://xisde.fun/](https://xisde.fun/)  
- Feedback visual em **popups** diretamente na tela  
- UI moderna e responsiva com **fade, blur e partículas animadas**  
- **Tema anime** com fundo animado  

### 🛠 Tecnologias

**Backend:** Node.js, Express, MongoDB, Mongoose, bcrypt, JWT, Nodemailer  
**Frontend:** HTML5, CSS3, JavaScript (vanilla)  
**Efeitos Visuais:** Canvas para partículas, blur, animações CSS  
**Gerenciamento de Ambiente:** dotenv  

### ⚡ Estrutura do Projeto

```

project/
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

### ⚙️ Instalação

```bash
git clone https://github.com/seuusuario/anime-login.git
cd anime-login
npm install
````

Crie um arquivo `.env`:

```
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=app_password
FROM_NAME=SeuNome
FROM_EMAIL=youremail@gmail.com
CODE_EXP_MIN=15
```

> Para Gmail, use **senha de app** no Nodemailer.

Inicie o servidor:

```bash
node server/server.js
```

Acesse:

```
http://localhost:3000
```

### 📌 Uso

1. **Login:** Email e senha
2. **Cadastro:** Clique em "Cadastrar nova conta"
3. **Verificação:** Digite o código enviado por email
4. Após verificação, você será redirecionado para [https://xisde.fun/](https://xisde.fun/)

### 💡 Personalização

* **Alterar fundo de anime:** `body { background: url('anime_bg.jpg'); background-size: cover; background-position: center; }`
* **Ajustar partículas:** modifique `app.js`
* **Alterar tempo de expiração do código:** variável `CODE_EXP_MIN` no `.env`

### 📜 Licença

MIT License

---

## 🇺🇸 English Version

**Anime Login** is a modern authentication page with **login, registration, and email verification**, using **Node.js, Express, MongoDB, bcrypt, and JWT**, with **animated floating particles over an anime background**.

### 📝 Features

* Login with email and password
* Register new accounts with hashed passwords
* Send verification codes via email
* Redirect after verification to [https://xisde.fun/](https://xisde.fun/)
* On-screen feedback in **popups**
* Modern responsive UI with **fade, blur and animated particles**
* **Anime theme** with animated background

### ⚙️ Installation

```bash
git clone https://github.com/yourusername/anime-login.git
cd anime-login
npm install
```

Create `.env`:

```
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=app_password
FROM_NAME=YourName
FROM_EMAIL=youremail@gmail.com
CODE_EXP_MIN=15
```

> For Gmail, use an **app password**.

Start server:

```bash
node server/server.js
```

Visit:

```
http://localhost:3000
```

### 📌 Usage

1. **Login:** Enter email and password
2. **Register:** Click "Register new account"
3. **Verify:** Enter code sent to email
4. After verification, you will be redirected to [https://xisde.fun/](https://xisde.fun/)

### 💡 Customization

* **Change anime background:** `body { background: url('anime_bg.jpg'); background-size: cover; background-position: center; }`
* **Adjust particles:** modify `app.js`
* **Change code expiration:** `CODE_EXP_MIN` in `.env`

### 📜 License

MIT License

```

---

Se você quiser, posso **fazer a versão ainda mais top com GIFs interativos no GitHub, links de demo e badges animados coloridos que piscam**, igual aqueles READMEs de portfólio top de linha que chamam atenção.  

Quer que eu faça essa versão ultra-profissional?
```
