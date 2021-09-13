import React from 'react';
import api from './api.js';
import Review from './review.jsx';
import Product_Info from './product_info.jsx';
import Image_Gallery from './image.jsx';
import Style from './style_selector.jsx';


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
         <Image_Gallery photos={this.state.photos} />
         <Review id={this.props.id} />
         <Product_Info category={this.state.category} title={this.state.title}
            slogan={this.state.slogan} description={this.state.description} />
         <Style styles={this.state.styles} />
      </div>
    )
  }
};

export default Overview;

