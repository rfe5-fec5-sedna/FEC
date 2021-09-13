import React from 'react';
import api from './api.js';
import Review from './review.jsx';
import {Product_info1, Product_info2} from './product_info.jsx';
import Image_Gallery from './image.jsx';
import Style from './style_selector.jsx';
import Cart from './cart.jsx';

import './style.css';


class Overview extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      category: '',
      title: '',
      slogan: '',
      description: '',
      styles: [],
      currentStyle: '',
      currentStyleSkus: [],
      cart: {},
      photos: []
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.id !== prevProps.id) {
      api.getProduct(this.props.id, (error, result) => {
      if(error) {
        console.log(error);
      } else {
        this.setState({
          category: result.category,
          title: result.name,
          slogan: result.slogan,
          description: result.description
        })
      }
    })
    };
  }


  render() {
    return(
      <div>
        <h2>-----------------Product Overview---------------------</h2>
        <div className="overview-container">
          <div className="imageBox">
          <Image_Gallery photos={this.state.photos} />
          </div>
          <div className="styleCartBox">
            <Review id={this.props.id} />
            <Product_info1 category={this.state.category} title={this.state.title} />
            <Style styles={this.state.styles} />
            <Cart />
          </div>
        </div>
        <div className="descriptionSlogan">
          <Product_info2 slogan={this.state.slogan} description={this.state.description} />
        </div>
      </div>

    )
  }
};

export default Overview;

