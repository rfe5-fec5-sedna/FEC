import React from 'react';

let ReviewTile = (props) => {
  return (
    <div id="review-tile">
      <h3>Individual Review Tile</h3>
      <h5>{props.productId}</h5>
    </div>
  );
}

export default ReviewTile;