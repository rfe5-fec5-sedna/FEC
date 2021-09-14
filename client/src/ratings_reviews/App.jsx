import React from 'react';
import ReviewsList from './ReviewsList.jsx';

const RatingsReviews = (props) => {
  let productId = props.currentProductId;

  return (
    <div id="ratings-reviews">
      <h1>|-----------Ratings and Reviews ----------|</h1>
      <ReviewsList currentProductId={productId}/>
    </div>
  )
}

export default RatingsReviews;