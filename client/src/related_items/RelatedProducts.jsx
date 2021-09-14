import React from 'react';
import axios from 'axios';

import Card from './Card';
import helpers from './helpers';
import './styles/RelatedProducts.css'

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      category: '',
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProductId !== prevProps.currentProductId) {
      helpers.getProductInfo(this.props.currentProductId)
        .then((res) => {
          this.setState({
            name: res.data.name,
            category: res.data.category
          })
        })
    }
  }

  render() {
    return (
      <div id="Related-Products" >
        <h1 id="related-product-header">Related Products</h1>
        <Card
          productName={this.state.name}
          productCategory={this.state.category}
        />
      </div>
    )
  }
}

export default RelatedProducts;