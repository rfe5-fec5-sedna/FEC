import React from 'react';
// import Rating from 'react-rating'; --> This is for later
import ReviewTile from './ReviewTile.jsx';

const ReviewsList = (props) => {

  return (
    <div id="reviews-list">
      <h1>Reviews List</h1>
      <h5>{props.currentProduct}</h5>
      <ReviewTile productId={props.currentProduct}/>
    </div>
  );
}

export default ReviewsList;