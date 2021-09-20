import React from 'react';
import api from './api.js';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as starSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as starOutline } from '@fortawesome/free-regular-svg-icons';

const Review = (props) => {
  let solid = <FontAwesomeIcon icon={starSolid} />;
  let outline = <FontAwesomeIcon icon={starOutline} />;

  if (props.count !== 0) {
    return (
      <div className="ratings" data-testid="ratings">
        <Rating
          emptySymbol={outline}
          fullSymbol={solid}
          initialRating={props.rating}
          readonly
        />
        <a href="#rating_link" className="reviewCount" data-testid="reviewCount">Read all {props.count} reviews</a>
      </div>
    );
  } else {
    return (
      <div className="noRatings" data-testid="noRatings">
       Make a purchase to be the first to review
      </div>
    );
  }
};

export default Review;
