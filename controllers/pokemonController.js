import Pokemon from '../models/Pokemon.js';

// Controlador para mostrar la lista de Pokémon
export const getPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.render('pokemonList', { pokemons });
  } catch (error) {
    console.error("Error al cargar la lista de Pokémon:", error);
    res.status(500).send("Error al cargar la lista de Pokémon");
  }
};

// Controlador para mostrar detalles de un Pokémon
export const getPokemonById = async (req, res) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id);
    if (pokemon) {
      res.render('pokemonDetail', { pokemon });
    } else {
      res.status(404).send("Pokémon no encontrado");
    }
  } catch (error) {
    console.error("Error al cargar los detalles del Pokémon:", error);
    res.status(500).send("Error al cargar los detalles del Pokémon");
  }
};

// Controlador para crear un nuevo Pokémon
export const createPokemon = async (req, res) => {
  const pokemon = new Pokemon(req.body);
  try {
    await pokemon.save();
    res.redirect('/pokemon'); // Redirige a la lista después de guardar
  } catch (error) {
    console.error("Error al guardar el Pokémon:", error);
    res.status(400).send("Error al guardar el Pokémon");
  }
};
