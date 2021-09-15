import React from 'react';
import helperFunction from './helperFunction.js';
import './styles/ReviewTile.css';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const ReviewTile = (props) => {
  let productId = props.productId;

  let starOutline = <FontAwesomeIcon icon={emptyStar} />;
  let starSolid = <FontAwesomeIcon icon={fullStar} />;
  let recommendCheck = <FontAwesomeIcon icon={faCheckCircle} />;

  return (
    <div id="review-tile">
      <h3>Individual Review Tile</h3>
      <h5>Current Product ID: {productId}</h5>
      <ul>
        {props.reviewsList.map((singleReview) => {
          // console.log(helperFunction.summaryFormat(singleReview.summary));
          return (
            <div className="single-review" key={singleReview.review_id}>
              <h5>Review #{singleReview.review_id}</h5>
              <Rating emptySymbol={starOutline} fullSymbol={starSolid} initialRating={singleReview.rating} readonly/><br></br>
              {helperFunction.dateFormat(singleReview.date)}<br></br>
              <div className="single-review-summary">
                {helperFunction.summaryFormat(singleReview.summary)}
              </div><br></br>
              {helperFunction.bodyFormat(singleReview.body)}<br></br>
              <div className="single-review-recommend">
                <Rating emptySymbol={recommendCheck} stop={1} readonly/> {helperFunction.reviewRecommend(singleReview.recommend)}
              </div><br></br>
              {singleReview.reviewer_name}<br></br> {/*TODO?*/}
              <div className="single-review-response">
                {helperFunction.responseFormat(singleReview.response)}
              </div><br></br>
              {singleReview.helpfulness}<br></br>
            </div>
          )
        })}
      </ul>
    </div>
  );
}

export default ReviewTile;