const express = require('express');
const app = express();
const port = 3000;
const Movie = require('../database');
const MOVIEDATABASE_API_KEY = require('./config/config.js');
const axios = require('axios');

app.use(express.static('public'));
app.use(express.json());

const oneMovie = new Movie({ title: 'Silence of the Lambs' });

app.get('/api/movieList', (req, res) => {
  axios
    .get(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDATABASE_API_KEY}&query=Mean+Girls`)
    .then((response) => {
      console.log('Movie successfully gotten');
      res.send(response.data.results);
    })
    .catch((err) => {
      console.log('Error: ', err);
    })
})

app.post('/', (req, res) => {
  res.send('Test')
})

app.put('/', (req, res) => {
  res.send('Test')
})

app.delete('/', (req, res) => {
  res.send('Test')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})