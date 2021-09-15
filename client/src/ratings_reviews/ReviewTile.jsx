import React from 'react';
import helperFunction from './helperFunction.js';
import './styles/ReviewTile.css';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'

const ReviewTile = (props) => {
  let productId = props.productId;

  let starOutline = <FontAwesomeIcon icon={emptyStar} />;
  let starSolid = <FontAwesomeIcon icon={fullStar} />;

  return (
    <div id="review-tile">
      <h3>Individual Review Tile</h3>
      <h5>Current Product ID: {productId}</h5>
      <ul>
        {props.reviewsList.map((singleReview) => {
          return (
            <div className="single-review" key={singleReview.review_id}>
              <h5>Review #{singleReview.review_id}</h5>
              <Rating emptySymbol={starOutline} fullSymbol={starSolid} initialRating={singleReview.rating} readonly/><br></br>
              {helperFunction.dateFormat(singleReview.date)}<br></br>
              {singleReview.summary}<br></br>
              {singleReview.body}<br></br>
              {singleReview.recommend}<br></br>
              {singleReview.reviewer_name}<br></br>
              {singleReview.response}<br></br>
              {singleReview.helpfulness}<br></br>
            </div>
          )
        })}
      </ul>
    </div>
  );
}

export default ReviewTile;