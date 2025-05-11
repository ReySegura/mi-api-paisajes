const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para permitir peticiones desde cualquier origen
app.use(cors());

// Servir archivos estáticos desde la carpeta /public
app.use('/imagenes', express.static(path.join(__dirname, 'public/imagenes')));

// Lista de paisajes con imágenes locales
const paisajes = [];

// Generar dinámicamente las 20 imágenes
const categorias = ['paisaje', 'montaña', 'cielo', 'animation'];
let id = 1;

categorias.forEach(categoria => {
  for (let i = 1; i <= 5; i++) {
    paisajes.push({
      id: id++,
      nombre: `${categoria}${i}`,
      imagen: `http://localhost:${port}/imagenes/${categoria}${i}.jpg`
    });
  }
});

app.get('/paisajes', (req, res) => {
  res.json(paisajes);
});

app.listen(port, () => {
  console.log(`✅ API corriendo en http://localhost:${port}/paisajes`);
});
