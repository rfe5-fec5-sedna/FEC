import React from 'react';

const ReviewTile = (props) => {
  let productId = props.productId;

  return (
    <div id="review-tile">
      <h3>Individual Review Tile</h3>
      <h5>Current Product ID: {productId}</h5>
      {/* <ul> */}
        {props.reviewsList.map((singleReview) => {
          return (
            <div className="single-review" key={singleReview.review_id}>
              <h5>Review #1</h5>
              {singleReview.rating}<br></br>
              {singleReview.date}<br></br>
              {singleReview.summary}<br></br>
              {singleReview.body}<br></br>
              {singleReview.recommend}<br></br>
              {singleReview.reviewer_name}<br></br>
              {singleReview.response}<br></br>
              {singleReview.helpfulness}<br></br>
            </div>
          )
        })}
      {/* </ul> */}
    </div>
  );
}

export default ReviewTile;