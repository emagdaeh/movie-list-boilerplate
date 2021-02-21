const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieList', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(console.log);

const database = mongoose.connection;

const movieSchema = new mongoose.Schema({
  uniqueId: Number,
  title: String,
  movieInfo: String,
  poster: String
});

const Movies = mongoose.model('Movies', movieSchema);

module.exports = Movies;