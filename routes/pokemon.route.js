import express from 'express';
import { getPokemons, getPokemonById, createPokemon } from '../controllers/pokemonController.js';

const router = express.Router();

router.get('/', getPokemons);
router.get('/nuevo', (req, res) => res.render('pokemonForm')); // Ruta para mostrar formulario de registro
router.get('/:id', getPokemonById);
router.post('/', createPokemon);

export default router;
