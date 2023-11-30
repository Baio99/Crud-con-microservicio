const express = require('express');
const usuarioService = require('../services/usuarioService');


const router = express.Router();

router.post('/usuarios', (req, res) => {
  const { nombre, apellido, usuario } = req.body;
  const nuevoUsuario = usuarioService.createUsuario(nombre, apellido, usuario);
  res.json({ usuario: nuevoUsuario });
});

router.get('/usuarios', (req, res) => {
  const usuarios = usuarioService.getUsuarios();
  res.json({ usuarios });
});

module.exports = router;
