const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  verified: { type: Boolean, default: false },
  verificationCode: String,
  verificationExpires: Date
});

module.exports = mongoose.model('User', userSchema);

