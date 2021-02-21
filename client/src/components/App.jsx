import React from 'react';

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
      currentMovies: hardcode
    }
  }

  render() {
    return(
      <div>
        <h1>Movie List</h1>
        <ul>

        </ul>
      </div>
    )
  }
}

export default App;