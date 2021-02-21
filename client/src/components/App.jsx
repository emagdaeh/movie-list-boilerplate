import React from 'react';
import axios from 'axios';

const hardcode = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'}
];

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      currentMovies: hardcode,
      overview: ''
    }
    this.onPageLoad = this.onPageLoad.bind(this);
    this.handleSearchText = this.handleSearchText.bind(this);
    this.findAndAddMovie = this.findAndAddMovie.bind(this);
  }

  componentDidMount() {
    this.onPageLoad();
  }

  onPageLoad() {
    // In this function, I want to send a get request to the server
    // When the server data returns from movie API, set state of current movies to that original search string

    axios
      .get('/api/movieList')
      .then((response) => {
        // handle success
        console.log(response);
        this.setState({overview: response.data[0].overview});
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
  }

  handleSearchText(event) {
    this.setState({title: event.target.value});
  }

  findAndAddMovie(event) {
    event.preventDefault();

    let addedMovieList = this.state.currentMovies;

    addedMovieList.push({title: this.state.title});

    this.setState({currentMovies: addedMovieList});

    this.setState({title: ''}); //<-- unclear why this won't clear the form
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
          <button type='submit' value={this.state.title} onClick={this.findAndAddMovie}>Submit</button>
        </form>
        <ul>
          <li>{this.state.currentMovies[0].title}</li>
          <li>{this.state.overview}</li>
        </ul>
      </div>
    )
  }
}

export default App;