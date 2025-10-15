const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { sendVerificationEmail } = require('../utils/mailer');

const CODE_EXP_MIN = Number(process.env.CODE_EXPIRES_MIN) || 15;

// --- Registro ---
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Email e senha obrigatórios' });

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Usuário já existe' });

    const passwordHash = await bcrypt.hash(password, 10);
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    const user = await User.create({
      email,
      passwordHash,
      verificationCode: code,
      verificationExpires: new Date(Date.now() + CODE_EXP_MIN * 60 * 1000)
    });

    await sendVerificationEmail(email, code);
    res.json({ message: 'Conta criada! Verifique seu email.' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

// --- Login ---
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Credenciais inválidas' });

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) return res.status(400).json({ message: 'Credenciais inválidas' });

    if (!user.verified) return res.status(403).json({ message: 'Conta não verificada' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ message: 'Login bem-sucedido', token });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

// --- Verify ---
router.post('/verify', async (req, res) => {
  try {
    const { email, code } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Usuário não encontrado' });

    if (user.verified) return res.status(400).json({ message: 'Conta já verificada' });

    if (user.verificationCode !== code || user.verificationExpires < new Date()) {
      return res.status(400).json({ message: 'Código inválido ou expirado' });
    }

    user.verified = true;
    user.verificationCode = null;
    user.verificationExpires = null;
    await user.save();

    res.json({ message: 'Conta verificada com sucesso!' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

// --- Reenvio ---
router.post('/resend', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Usuário não encontrado' });
    if (user.verified) return res.status(400).json({ message: 'Conta já verificada' });

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    user.verificationCode = code;
    user.verificationExpires = new Date(Date.now() + CODE_EXP_MIN * 60 * 1000);
    await user.save();

    await sendVerificationEmail(email, code);
    res.json({ message: 'Código reenviado' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

module.exports = router;
