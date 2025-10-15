require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, 'client')));
app.get('/', (req,res)=>res.sendFile(path.join(__dirname,'client','index.html')));

// Rotas de autenticação
app.use('/api/auth', authRoutes);

// Conectar MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(()=>console.log('MongoDB conectado'))
  .catch(err=>console.error(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`Servidor rodando em http://localhost:${PORT}`));
