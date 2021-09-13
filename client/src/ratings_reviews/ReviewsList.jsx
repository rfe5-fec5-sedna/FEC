import React from 'react';
import Rating from 'react-rating';

let ReviewsList = (props) => {

  return (
    <div>
      <h1>Reviews List</h1>
      <h5>{props.currentProduct}</h5>
    </div>
  );
}

export default ReviewsList;