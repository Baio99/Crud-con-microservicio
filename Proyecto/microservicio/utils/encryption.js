// encryption.js

const crypto = require('crypto');

const secretKey = process.env.ENCRYPTION_SECRET || 'clave_secreta_predeterminada';

function encryptData(data) {
  const secretKey = 'tu_clave_secreta';
  const cipher = crypto.createCipher('aes-256-cbc', secretKey);
  let encrypted = cipher.update(JSON.stringify(data), 'utf-8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function decryptData(encryptedData) {
  const secretKey = 'tu_clave_secreta';
  const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
  let decrypted = decipher.update(encryptedData, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');
  return JSON.parse(decrypted);
}

module.exports = { encryptData, decryptData };
