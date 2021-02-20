import React from 'react';
import axios from 'axios';
import MovieList from './ListOfMovies';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      currentListOfMovies: []
    }

    this.searchForMovie = this.searchForMovie.bind(this);
    this.searchClickHandler = this.searchClickHandler.bind(this);
  }

  searchForMovie(event) {


    this.setState({title: event.target.value})
  }

  searchClickHandler(event) {
    event.preventDefault();

    let targetMovie = currentListOfMovies;

    targetMovie.push({title: event.target.value});

    this.setState({currentListOfMovies: targetMovie});

    this.setState({title: ''});
  }

  render() {
    return(
      <div>
        <h1>Movie List</h1>
        <form>
          <label>
            Find a Movie:
            <input type='text' onChange={this.searchForMovie}/>
          </label>
          <input type='submit' value='Submit' onClick={this.searchClickHandler}/>
        </form>
        <MovieList />
      </div>
    )
  }
}

export default App;