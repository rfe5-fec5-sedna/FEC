import React from 'react';
import axios from 'axios';

import Overview from './product_overview/App.jsx';
import RelatedItems from './related_items/App.jsx';
import RatingsReviews from './ratings_reviews/RatingsReviews.jsx';
import SearchBar from './SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentProduct: '' }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, id) {
    e.preventDefault();
    this.setState({ currentProduct: Number(id) })
  }

  componentDidMount() {
    axios.get('/sedna/products')
      .then((response) => {
        this.setState({ currentProduct: response.data[0].id })
      })
      .catch((error) => {
        console.error(error);
      })
  }

  render() {
    return (
      <div>
        <h1>Hello Sedna</h1>
        <SearchBar handleClick={this.handleClick} />
        <Overview id={this.state.currentProduct} />
        <RelatedItems currentProduct={this.state.currentProduct} />
        <RatingsReviews currentProduct={this.state.currentProduct} />
      </div>
    )
  }
}

export default App;