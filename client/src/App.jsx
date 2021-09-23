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
          <a className="github-button" id="luna" href="https://github.com/luna-moon-1216" data-size="large" aria-label="Follow @luna-moon-1216 on GitHub">Follow @luna-moon-1216</a>
          <a className="github-button" id="jordan" href="https://github.com/jordanvillacorta" data-size="large" aria-label="Follow @jordanvillacorta on GitHub">Follow @jordanvillacorta</a>
          <a className="github-button" id="sebastian" href="https://github.com/SebasCC99" data-size="large" aria-label="Follow @SebasCC99 on GitHub">Follow @SebasCC99</a>
          <a className="github-button" href="https://github.com/rfe5-fec5-sedna/FEC" data-icon="octicon-star" data-size="large" aria-label="Star rfe5-fec5-sedna/FEC on GitHub">Star</a>
        </footer>
      </>
    )
  }
}

export default App;