const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const paisajes = [
  { id: 1, nombre: "Montaña nevada", imagen: "https://images.unsplash.com/photo-1601758123927-1964a4f2c2aa" },
  { id: 2, nombre: "Lago entre montañas", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { id: 3, nombre: "Bosque al amanecer", imagen: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
  { id: 4, nombre: "Playa paradisíaca", imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { id: 5, nombre: "Campo con flores", imagen: "https://images.unsplash.com/photo-1433838552652-f9a46b332c40" },
  { id: 6, nombre: "Desierto dorado", imagen: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  { id: 7, nombre: "Catarata majestuosa", imagen: "https://images.unsplash.com/photo-1549887534-248dd0d16035" },
  { id: 8, nombre: "Pradera verde", imagen: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e" },
  { id: 9, nombre: "Glaciar helado", imagen: "https://images.unsplash.com/photo-1501854140801-50d01698950b" },
  { id: 10, nombre: "Volcán activo", imagen: "https://images.unsplash.com/photo-1509631179647-0177331693ae" },
  { id: 11, nombre: "Camino en el bosque", imagen: "https://images.unsplash.com/photo-1469474968028-56623f02e42e" },
  { id: 12, nombre: "Aurora boreal", imagen: "https://images.unsplash.com/photo-1500021804521-858b1b84d9b0" },
  { id: 13, nombre: "Cielo estrellado", imagen: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d" },
  { id: 14, nombre: "Río en la montaña", imagen: "https://images.unsplash.com/photo-1503437313881-503a91226402" },
  { id: 15, nombre: "Costa rocosa", imagen: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6" },
  { id: 16, nombre: "Templo en la niebla", imagen: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" },
  { id: 17, nombre: "Cañón del sol", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { id: 18, nombre: "Montañas en otoño", imagen: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e" },
  { id: 19, nombre: "Isla tropical", imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { id: 20, nombre: "Sendero natural", imagen: "https://images.unsplash.com/photo-1500534314209-a26ddb6f33f7" }
];

app.get('/paisajes', (req, res) => {
  res.json(paisajes);
});

app.listen(port, () => {
  console.log(`✅ API corriendo en http://localhost:${port}/paisajes`);
});
