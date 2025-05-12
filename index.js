const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Importante para que Render use su propio puerto

// Middleware para permitir peticiones desde cualquier origen
app.use(cors());

// Servir archivos estáticos desde la carpeta /public/imagenes
app.use('/imagenes', express.static(path.join(__dirname, 'public/imagenes')));

// Lista de paisajes con imágenes locales
const paisajes = [];

// Categorías e imágenes (5 de cada una)
const categorias = ['paisaje', 'montaña', 'cielo', 'animation'];
let id = 1;

// Generar los objetos con rutas relativas
categorias.forEach(categoria => {
  for (let i = 1; i <= 5; i++) {
    paisajes.push({
      id: id++,
      nombre: `${categoria}${i}`,
      imagen: `/imagenes/${categoria}${i}.jpg` // ✅ Ruta que funciona en local y en Render
    });
  }
});

// Endpoint para devolver la lista de paisajes
app.get('/paisajes', (req, res) => {
  res.json(paisajes);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`✅ API corriendo en http://localhost:${port}/paisajes`);
});
