const express = require('express');
const app = express();
const port = 3000;
const Movie = require('../database');
const MOVIEDATABASE_API_KEY = require('./config/config.js');
const axios = require('axios');

app.use(express.static('public'));
app.use(express.json());

// const oneMovie = new Movie({ title: 'Lord of the Rings' });
// oneMovie.save((err, result) => {
//   if (err) {
//     console.log('Error: ', err);
//   } else {
//     console.log('Success: ', result);
//   }
// })

// Movie.deleteMany({ title: 'Silence of the Lambs' }, (err, result) => {
//   if (err) {
//     console.log('Error: ', err);
//   } else {
//     console.log('Success: ', result);
//   }
// });

// Movie.find((err, result) => {
//   if (err) {
//     console.log('Error: ', err);
//   } else {
//     console.log('Success: ', result);
//   }
// })

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

  // axios
  //   .get(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDATABASE_API_KEY}&query=Mean+Girls`)
  //   .then((response) => {
  //     console.log('Movie successfully gotten');
  //     res.send(response.data.results);
  //   })
  //   .catch((err) => {
  //     console.log('Error: ', err);
  //   })

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