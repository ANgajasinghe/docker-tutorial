const { Schema, model } = require('mongoose');

const favoriteSchema = new Schema({
  type: String, // 'movie' | 'character'
  name: String,
  url: String
}); 

const Favorite = model('Favorite', favoriteSchema);

module.exports = Favorite;