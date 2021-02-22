import React from 'react';
import axios from 'axios';
import SingleMovie from './ListOfMovies.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      databaseMovies: [],
      displayMovies: [],
      overview: ''
    }
    this.showDatabaseOfMovies = this.showDatabaseOfMovies.bind(this);
    this.handleSearchText = this.handleSearchText.bind(this);
    this.findMovie = this.findMovie.bind(this);
  }

  componentDidMount() {
    this.showDatabaseOfMovies();
  }

  showDatabaseOfMovies() {
    axios
      .get('/api/movieList')
      .then((response) => {
        console.log(response);

        let allDBMovies = this.state.databaseMovies;

        for (let i = 0; i < response.data.length; i++) {
          allDBMovies.push({title: response.data[i].title});
        }

        this.setState({databaseMovies: allDBMovies});
      })
      .catch((error) => {
        console.log(error);
      })

    this.setState({displayMovies: this.state.databaseMovies});
  }

  handleSearchText(event) {
    this.setState({title: event.target.value});
  }

  findMovie(event) {
    event.preventDefault();

    axios
      .post('/api/movieList', {title: this.state.title})
      .then((response) => {
        console.log('This is on App: ', response);
      })
      .catch((error) => {
        console.log('Error: ', error);
      })

    this.setState({title: ''}); //<-- unclear why this won't clear the form field
  }

  render() {
    return(
      <div>
        <h1>Movie List</h1>
        <form>
          <label>
            Find a movie:
            <input type='text' onChange={this.handleSearchText}/>
          </label>
          <button type='submit' value={this.state.title} onClick={this.findMovie}>Submit</button>
        </form>
        <SingleMovie allTheMovies={this.state.displayMovies}/>
      </div>
    )
  }
}

export default App;