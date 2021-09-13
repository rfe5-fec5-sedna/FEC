import React from 'react';
import ReviewsList from './ReviewsList.jsx';

const RatingsReviews = (props) => {
  let currentProduct = props.currentProduct;

  return (
    <div id="ratings-reviews">
      <h1>|-----------Ratings and Reviews ----------|</h1>
      <ReviewsList currentProduct={currentProduct}/>
    </div>
  )
}

export default RatingsReviews;