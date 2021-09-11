import React from 'react';

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
        <h1>Ratings and Reviews </h1>
      </div>
    )
  }
}

export default RatingsReviews;