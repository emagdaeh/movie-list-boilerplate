const express = require('express');
const app = express();
const port = 3000;
const Movie = require('../database')

app.use(express.static('public'));
app.use(express.json());

const oneMovie = new Movie({ title: 'Silence of the Lambs' });

console.log('oneMovie: ', oneMovie);

app.get('/', (req, res) => {
  res.send('Test')
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