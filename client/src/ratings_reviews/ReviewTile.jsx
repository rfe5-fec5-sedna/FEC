import React from 'react';

let ReviewTile = (props) => {
  return (
    <div id="review-tile">
      <h3>Individual Review Tile</h3>
      <h5>Current Product ID: {props.productId}</h5>
      <h5>Review #1</h5>
      <h5>Review #2</h5>
    </div>
  );
}

export default ReviewTile;