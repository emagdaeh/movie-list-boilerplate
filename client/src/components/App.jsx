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
      searchedMoviesList: []
    }

    this.searchForMovie = this.searchForMovie.bind(this);
    this.searchClickHandler = this.searchClickHandler.bind(this);
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
          <MovieList allTheMovies={this.state.searchedMoviesList}/>
        </div>
      )
    }
  }
}

export default App;