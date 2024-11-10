import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import pokemonRouter from './routes/pokemon.route.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Configurar Pug como motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');

// Conectar a MongoDB
mongoose.connect('mongodb://Camilo:root@localhost:27017/admin')
  .then(() => console.log("Conectado a MongoDB"))
  .catch(error => console.log("Error al conectar con MongoDB", error));

// Usar las rutas de Pokémon
app.use('/pokemon', pokemonRouter);

// Ruta principal para redireccionar a la lista de Pokémon
app.get('/', (req, res) => {
  res.redirect('/pokemon');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
