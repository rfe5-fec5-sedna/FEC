import React from 'react';
import ReviewsList from './ReviewsList.jsx';
import RatingsBreakdown from './RatingsBreakdown.jsx';
import './styles/App.css';

const RatingsReviews = (props) => {
  let productId = props.currentProductId;

  return (
    <div id="ratings-reviews">
      <a id="rating_link">
      <div id="ratings-breakdown">
        <RatingsBreakdown currentProductId={productId} />
      </div>
      </a>
      <ReviewsList currentProductId={productId}/>
    </div>
  )
}

export default RatingsReviews;