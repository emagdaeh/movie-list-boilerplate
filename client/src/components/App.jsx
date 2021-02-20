import React from 'react';
import axios from 'axios';
import MovieList from './ListOfMovies';

const hardcode = [
  // 'Mean Girls',
  // 'Hackers',
  // 'The Grey',
  // 'Sunshine',
  // 'Ex Machina'
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'}
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      initialMovies: hardcode,
      searchedMoviesList: [],
      addedMoviesOnly: []
    }

    this.searchForMovie = this.searchForMovie.bind(this);
    this.searchClickHandler = this.searchClickHandler.bind(this);
    this.addAMovie = this.addAMovie.bind(this);
    this.addMovieHandler = this.addMovieHandler.bind(this);
  }

  componentDidMount() {

  }

  searchForMovie(event) {
    if (event.target.value === null) {
      this.setState({initialMovies: initialMovies});
    }

    let copyOfMovieArr = this.state.initialMovies;

    let enteredStr = event.target.value.toLowerCase();

    let searchedMovies = [];

    for (let i = 0; i < copyOfMovieArr.length; i++) {
      let chars = copyOfMovieArr[i].title.toLowerCase();

      if (chars.substring(0).includes(enteredStr)) {
        searchedMovies.push(copyOfMovieArr[i]);
      }
    }

    //Haven't handled movie not existing

    this.setState({searchedMoviesList: searchedMovies});

    this.setState({title: event.target.value});
  }

  searchClickHandler(event) {
    event.preventDefault();

    let targetMovie = this.state.initialMovies;

    targetMovie.push({title: this.state.title});

    this.setState({initialMovies: targetMovie});

    this.setState({title: ''});
  }

  addAMovie(event) {
    this.setState({title: event.target.value});
  }

  addMovieHandler() {
    event.preventDefault();

    let myMovies = this.state.addedMoviesOnly;

    myMovies.push({title: this.state.title});

    this.setState({addedMoviesOnly: myMovies});

    this.setState({title: ''});
  }

  render() {
    // return(
    //   <div>
    //     <h1>Movie List</h1>
    //     <form>
    //       <label>
    //         Find a Movie:
    //         <input type='text' onChange={this.searchForMovie}/>
    //       </label>
    //       <input type='submit' onClick={this.searchClickHandler}/>
    //     </form>
    //     <MovieList allTheMovies={this.state.initialMovies}/>
    //   </div>
    // )
    if (this.state.searchedMoviesList.length === 0) {
      return(
        <div>
          <h1>Movie List</h1>
          <form>
            <label>
              Find a Movie:
              <input type='text' onChange={this.searchForMovie}/>
            </label>
            <input type='submit' onClick={this.searchClickHandler}/>
          </form>
          <form>
            <label>
              Add a Movie:
              <input type='text' onChange={this.addAMovie}/>
            </label>
            <input type='submit' onClick={this.addMovieHandler}/>
          </form>
          <MovieList allTheMovies={this.state.initialMovies}/>
        </div>
      )
    } else {
      return(
        <div>
          <h1>Movie List</h1>
          <form>
            <label>
              Find a Movie:
              <input type='text' onChange={this.searchForMovie}/>
            </label>
            <input type='submit' onClick={this.searchClickHandler}/>
          </form>
          <form>
            <label>
              Add a Movie:
              <input type='text' />
            </label>
            <input type='submit' onClick={this.addAMovie}/>
          </form>
          <MovieList allTheMovies={this.state.searchedMoviesList}/>
        </div>
      )
    }
  }
}

export default App;