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
      databaseMovies: [],
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
    // In this function, I want to send a get request to the server
    // When the server data returns from movie API, set state of current movies to that original search string

    axios
      .get('/api/movieList')
      .then((response) => {
        console.log(response);
        this.setState({databaseMovies: response.data[0].title});
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleSearchText(event) {
    this.setState({title: event.target.value});
  }

  findMovie(event) {
    event.preventDefault();

    let searchedForMovie = this.state.databaseMovies;

    this.setState({searchedMovies: searchedForMovie});

    //Clear initial movie load

    //axios post here with searched title

    this.setState({title: ''}); //<-- unclear why this won't clear the form field
  }

  render() {
    // Do conditional render
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
        <ul>
          <li>{this.state.databaseMovies}</li>
          <li>{this.state.overview}</li>
        </ul>
      </div>
    )
  }
}

export default App;