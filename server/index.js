const express = require('express');
const app = express();
const port = 3000;
const Movie = require('../database');
const MOVIEDATABASE_API_KEY = require('./config/config.js');
const axios = require('axios');

app.use(express.static('public'));
app.use(express.json());

app.get('/api/movieList', (req, res) => {
  Movie.find((err, result) => {
    if (err) {
      console.log('Error: ', err);
    } else {
      console.log('Success: ', result);
      res.send(result);
    }
  });

})

app.post('/api/movieList', (req, res) => {
  // Axios get to The Movie Database and communicate with db
  const searchStr = req.body.title;

  axios
    .get(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDATABASE_API_KEY}&query=${searchStr}`)
    .then((response) => {
      console.log('Movie successfully gotten');
      // console.log('response: ', response.data.results[0].title);
      res.send(response.data.results[0].title);
    })
    .catch((err) => {
      console.log('Error: ', err);
    })

  // Movie.save((err, result) => {
  //   if (err) {
  //     console.log('Error: ', err);
  //   } else {
  //     console.log('Success: ', result);
  //   }
  // });
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