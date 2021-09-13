import React from 'react';
import ReviewsList from './ReviewsList.jsx';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: props.currentProduct
    }
  }

  render() {
    return (
      <div>
        <h1>|-----------Ratings and Reviews ----------|</h1>
        <ReviewsList currentProduct={this.props.currentProduct}/>
      </div>
    )
  }
}

export default RatingsReviews;