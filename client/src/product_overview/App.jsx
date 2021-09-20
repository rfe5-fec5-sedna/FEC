import React from 'react';
import api from './api.js';
import Review from './review.jsx';
import { Product_info1, Product_info2 } from './product_info.jsx';
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
      price: '',
      slogan: '',
      description: '',
      rating: '',
      count: '',
      styles: [],
      stylesIn4: [],
      currentStyleId: '',
      currentStyleName: '',
      currentSkus: [],
      cart: {},
      currentPhoto: '',
      currentPhotos: []
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      api.getProduct(this.props.id, (error, result) => {
        if (error) {
          console.log(error);
        } else {
          this.setState({
            category: result.category,
            title: result.name,
            slogan: result.slogan,
            description: result.description
          })
        }
      });

      api.getStyles(this.props.id, (error, result) => {
        if (error) {
          console.log(error);
        } else {
          var styles = [];
          var group = [];
          for (var i = 0; i < result.length; i++) {
            group.push(result[i]);
            if (group.length === 4) {
              styles.push(group);
              group = [];
            }
          };
          styles.push(group);

          this.setState({
            stylesIn4: styles,
            styles: result,
            currentStyleId: result[0].style_id,
            currentStyleName: result[0].name,
            currentPhoto: result[0].photos[0].url,
            currentPhotos: result[0].photos,
            price: [result[0].original_price, result[0].sale_price],
            currentSkus: result[0].skus
          })
        }
      });

      api.getReview(this.props.id, (error, result) => {
        if(error) {
          console.log(error);
        } else {
          this.setState({
            rating: api.starCalc(result)
          })
        }
      });

      api.getCount(this.props.id, (error, result) => {
        if(error) {
          console.log(error);
        } else {
          this.setState({
            count: result
          })
        }
      });

    };
  }

  handleClick(product, e) {
    // e.preventDefault();
    console.log('this is product', product);
    this.setState({
      currentStyleId: product.style_id,
      currentPhoto: product.currentPhoto,
      currentPhotos: product.currentPhotos,
      price: product.price,
      currentSkus: product.currentSkus,
      currentStyleName: product.name
    })
  }



  render() {
    return (
      <div id="product-overview">
        <div className="overview-container">
          <div className="imageBox">
            <Image_Gallery currentPhotos={this.state.currentPhotos} currentPhoto={this.state.currentPhoto} />
          </div>
          <div className="styleCartBox">
            <Review rating={this.state.rating} count={this.state.count} />
            <Product_info1 category={this.state.category} title={this.state.title} price={this.state.price} />
            <Style stylesIn4={this.state.stylesIn4} styles={this.state.styles} styleName={this.state.currentStyleName} handleClick={this.handleClick} handleStyle={this.props.handleStyle} />
            <Cart skus={this.state.currentSkus} />
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

