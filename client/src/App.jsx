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
      <>
        <header id="app-header">
          <h1 id="title">Project Cat-walk</h1>
          <SearchBar handleClick={this.handleClick} />
        </header>
        <div id="widgets">
          <Overview id={this.state.currentProduct} handleStyle={this.handleStyle} />
          <RelatedItems currentProductId={this.state.currentProduct} currentStyleId={this.state.currentStyleId} />
          <RatingsReviews currentProductId={this.state.currentProduct} />
        </div>
        <footer id="footer">
          <p>luna-moon-1216 jordanvillacorta SebasCC99</p>
        </footer>
      </>
    )
  }
}

export default App;