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
      currentListOfMovies: hardcode
    }

    this.searchForMovie = this.searchForMovie.bind(this);
    this.searchClickHandler = this.searchClickHandler.bind(this);
  }

  componentDidMount() {

  }

  searchForMovie(event) {
    // let copyOfMovieArr = this.state.currentListOfMovies;

    // for (let i = 0; i < copyOfMovieArr.length; i++) {
    //   let titleSplit = copyOfMovieArr[i].split('');
    //   console.log(titleSplit);
    // }

    this.setState({title: event.target.value});
  }

  searchClickHandler(event) {
    event.preventDefault();

    let targetMovie = this.state.currentListOfMovies;

    targetMovie.push({title: this.state.title});

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
          <input type='submit' onClick={this.searchClickHandler}/>
        </form>
        <MovieList allTheMovies={this.state.currentListOfMovies}/>
      </div>
    )
  }
}

export default App;