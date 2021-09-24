import React from "react";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

const OverallRating = (props) => {
  let starRating = props.starRating;
  let starOutline = <FontAwesomeIcon icon={emptyStar} />;
  let starSolid = <FontAwesomeIcon icon={fullStar} />;

  return (
    <div className="overall-rating-stars">
      <Rating
        emptySymbol={starOutline}
        fullSymbol={starSolid}
        value={starRating}
        initialRating={starRating}
        onChange={props.onChange}
      />
    </div>
  );
}

export default OverallRating;
