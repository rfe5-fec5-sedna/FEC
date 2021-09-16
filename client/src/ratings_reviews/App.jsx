import React from 'react';
import ReviewsList from './ReviewsList.jsx';
import './styles/App.css';

const RatingsReviews = (props) => {
  let productId = props.currentProductId;

  return (
    <div id="ratings-reviews">
      <h3>--------Ratings and Reviews--------</h3>
      <ReviewsList currentProductId={productId}/>
    </div>
  )
}

export default RatingsReviews;