import React from 'react';
import axios from 'axios';

import Card from './Card';
import helpers from './helpers';
import './styles/RelatedProducts.css'

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      relatedProducts: [],
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProductId !== prevProps.currentProductId) {
      helpers.getRelated(this.props.currentProductId)
        .then((res) => {
          const relatedProducts = res.data;
          return relatedProducts
        })
        .then((products) => {
          helpers.getProductsData(products)
            .then((res) => {
              this.setState({ relatedProducts: res })
            })
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  render() {
    return (
      <div id="Related-Products" >
        <h1 id="related-product-header">Related Products</h1>
        <div>
          {this.state.relatedProducts.map((product, index) => {
            return (<Card
              productName={product.name}
              productCategory={product.category}
              productPrice={product.default_price}
            />)
          })}
        </div>
      </div>
    )
  }
}

export default RelatedProducts;