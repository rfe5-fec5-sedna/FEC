import React from 'react';
import helperFunction from './helperFunction.js';
import RatingHelpfulness from './RatingHelpfulness.jsx'
import './styles/ReviewTile.css';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const ReviewTile = (props) => {
  let singleReview = props.singleReview;

  let starOutline = <FontAwesomeIcon icon={emptyStar} />;
  let starSolid = <FontAwesomeIcon icon={fullStar} />;
  let recommendCheck = <FontAwesomeIcon icon={faCheckCircle} />;

  return (
    <div id="single-review-tile">
      <div className="single-review">
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
        <div className="single-review-helpfulness">
          <RatingHelpfulness yesCount={singleReview.helpfulness} />
        </div><br></br>
      </div>
    </div>
  );
}

export default ReviewTile;