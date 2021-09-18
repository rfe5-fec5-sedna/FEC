import React from 'react';
import axios from 'axios';

import Overview from './product_overview/App.jsx';
import RelatedItems from './related_items/components/RelatedItem';
import RatingsReviews from './ratings_reviews/App.jsx';
import SearchBar from './SearchBar.jsx';

import '../dist/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: '',
      currentStyleId: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleStyle = this.handleStyle.bind(this);
  }

  handleClick(e, id) {
    e.preventDefault();
    this.setState({ currentProduct: Number(id) })
  }

  handleStyle(id) {
    this.setState({
      currentStyleId: id
    })
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
      <div id="Sedna">
        <header id="app-header">
          <h1>Hello Sedna</h1>
          <SearchBar handleClick={this.handleClick} />
        </header>
        <Overview id={this.state.currentProduct} handleStyle={this.handleStyle} />
        <RelatedItems currentProductId={this.state.currentProduct} />
        <RatingsReviews currentProductId={this.state.currentProduct} />
      </div>
    )
  }
}

export default App;