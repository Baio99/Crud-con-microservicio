// usuarioService.js

const encryptionUtils = require('../utils/encryption');

let usuarios = [];

function createUsuario(nombre, apellido, usuario) {
  const usuarioData = { nombre, apellido, usuario };
  const encryptedData = encryptionUtils.encryptData(usuarioData);

  // Imprime la versión encriptada antes de almacenarla
  console.log('Datos encriptados:', encryptedData);

  usuarios.push(encryptedData);
  return encryptedData;
}

function getUsuarios() {
  const encryptedUsers = usuarios;
  const decryptedUsers = encryptedUsers.map(encryptionUtils.decryptData);

  // Imprime la versión encriptada antes de almacenarla
  console.log('Datos desencriptados:', decryptedUsers);

  return decryptedUsers;
}

module.exports = { createUsuario, getUsuarios };
