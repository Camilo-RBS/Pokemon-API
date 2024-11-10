import mongoose from 'mongoose';

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: [String], required: true },
  abilities: [String],
  stats: {
    hp: Number,
    attack: Number,
    defense: Number,
    speed: Number
  },
  moves: [String],
  imageUrl: String
});

export default mongoose.model('Pokemon', pokemonSchema);
