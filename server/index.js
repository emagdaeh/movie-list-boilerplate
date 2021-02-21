const express = require('express');
const app = express();
const Movies = require('../database/index.js');
const PORT = 3000 || process.env.PORT;

app.use(express.static('public'));
app.use(express.json());

app.post('/api/movieList', (req, res) => {
  //req.body.movienameofsomekind
  axios
    .get('https//etc' /* plus or minus additional parameter that includes the movie name */)
    .then((thingReturnedFromAPI) => {
      //thingsReturedFromAPI.data <-- look at this in console
      // let returnObj = {
      //   title: thingReturnedFromAPI.title,
      //   etc
      // }
      // Read on insertMany
      return Movies.create(/* all the things from processing returnObj */) //<-- Probably need to only grab a couple of properties
    })
    .then(() => {
      res.sendStatus(201);
    })
    .catch(err) {
      res.status(500).send(err);
    }

    // res.status(200).send(thingReturnedFromAPI.data); //<-- data is kind of like req.body, so we want data from data (i.e. req.body.data)
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})