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
  const searchStr = req.body.title;

  axios
    .get(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDATABASE_API_KEY}&query=${searchStr}`)
    .then((response) => {
      // console.log('Movie successfully gotten');
      // console.log('response: ', response.data.results[0].title);

      const theMovieResultFromTMDB = new Movie({title: response.data.results[0].title});


      // Create a variable to hold the .get data
      // Use the below function to with the variable information to save to my database
      theMovieResultFromTMDB.save((err, result) => {
        if (err) {
          console.log('Error: ', err);
        } else {
          console.log('Success: ', result);
          res.send(result.title);
        }
      });

      // Once the movie is successfully saved to my database, return out the information from the database to pass back down to the client in the below .then statement

    })
    .catch((err) => {
      console.log('Error: ', err);
    })
    // .then((response) => {
    //   console.log('Second .then response: ', response);
    //   res.send(response.title);
    // })
})

app.put('/api/movieList/:movieLength/:actors', (req, res) => {
  res.send(req.params)
})

app.delete('/', (req, res) => {
  res.send('Test')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})