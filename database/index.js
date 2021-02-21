const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movieList', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB is connected!');
});

const movieListSchema = new mongoose.Schema({
  title: String
});

const Movie = mongoose.model('Movie', movieListSchema);

module.exports = Movie;