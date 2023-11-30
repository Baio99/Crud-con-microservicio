const https = require('https');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { encryptData, decryptData } = require('./microservicio/utils/encryption');


const app = express();
const port = 3000;

app.use(bodyParser.json());

// Configuración para MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'usuariossoft'
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos MySQL');
  }
});

// Configuración para HTTPS
const privateKeyPath = 'D:/Documentos/6tosemestre/softwaredeseguridad/Proyecto/clave_privada.pem';
const certificatePath = 'D:/Documentos/6tosemestre/softwaredeseguridad/Proyecto/certificado.pem';

// Verificar la existencia de la clave privada y el certificado
if (!fs.existsSync(privateKeyPath) || !fs.existsSync(certificatePath)) {
  console.error('No se encontró la clave privada o el certificado.');
  process.exit(1);
}

const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
const certificate = fs.readFileSync(certificatePath, 'utf8');
const credentials = { key: privateKey, cert: certificate };

// Crear el servidor HTTPS
const httpsServer = https.createServer(credentials, app);



// Iniciar el servidor HTTPS
httpsServer.listen(port, () => {
  console.log(`Microservicio escuchando en https://localhost:${port}`);
});


app.post('/api/usuarios', (req, res) => {
  const usuario = req.body;

  // Verificar si 'nombre' está presente en los datos recibidos
  if (!usuario.nombre) {
    return res.status(400).send('El campo "nombre" es obligatorio.');
  }

  // Encriptar los datos antes de guardarlos
  const encryptedUsuario = encryptData(usuario);


  // Guardar en el archivo
  fs.appendFile('usuarios.txt', JSON.stringify(encryptedUsuario) + '\n', (err) => {
    if (err) {
      console.error('Error al guardar en el archivo:', err);
      return res.status(500).send('Error interno del servidor');
    }
    console.log('Datos encriptados y guardados en el archivo usuarios.txt');

    // Guardar en la base de datos MySQL
    const insertQuery = 'INSERT INTO usuarios (nombre, apellido, usuario) VALUES (?, ?, ?)';
    const values = [encryptedUsuario, encryptedUsuario, encryptedUsuario]; // Solo insertamos el valor encriptado

    db.query(insertQuery, values, (err, result) => {
      if (err) {
        console.error('Error al insertar en la base de datos MySQL:', err);
        return res.status(500).send('Error interno del servidor');
      }
      console.log('Datos insertados en la base de datos MySQL');
      return res.status(200).send('Datos guardados correctamente');
    });
  });
});

// Manejar la solicitud GET para /api/usuarios

// Manejar la solicitud GET para /api/usuarios
app.get('/api/usuarios', (req, res) => {
  // Recuperar datos de la base de datos MySQL
  const selectQuery = 'SELECT * FROM usuarios';

  db.query(selectQuery, (err, results) => {
    if (err) {
      console.error('Error al recuperar datos de la base de datos MySQL:', err);
      res.status(500).send('Error interno del servidor');
    } else {
      // No necesitas desencriptar los datos, ya que vienen desencriptados de la base de datos
      res.status(200).json(results);
    }
  });
});




/*const express = require('express');
const bodyParser = require('body-parser');
const setupRoutes = require('./microservicio/routes');


const app = express();
const port = 3000;

app.use(bodyParser.json());

setupRoutes(app);

app.listen(port, () => {
  console.log(`Microservicio escuchando en http://localhost:${port}`);
});*/

