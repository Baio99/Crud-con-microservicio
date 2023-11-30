const usuarioController = require('./controllers/usuarioController');  // Ajusta la ruta correcta

function setupRoutes(app) {
  app.use('/api', usuarioController);
}

module.exports = setupRoutes;
