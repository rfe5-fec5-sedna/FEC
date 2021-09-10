import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  ComponentDidMount() {
    axios.get('/sedna/products')
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    })
  }

  render() {
    return (
      <div>
        <h1>Hello Sedna</h1>
      </div>
    )
  }
}

export default App;