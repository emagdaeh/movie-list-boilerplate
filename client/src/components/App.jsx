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
  }

  componentDidMount() {
    this.onPageLoad();
  }

  onPageLoad() {
    // In this function, I want to send a get request to the server
    // When the server data returns from movie API, set state of current movies to that original search string
    axios
      .get('/api/movieList')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(this.setState)
  }

  render() {
    return(
      <div>
        <h1>Movie List</h1>
        <ul>
          <li>{this.state.currentMovies[0].title}</li>
        </ul>
      </div>
    )
  }
}

export default App;