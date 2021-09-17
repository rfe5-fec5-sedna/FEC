import React from 'react';
import helperFunction from './helperFunction.js';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      averageRating: '',
      averageStarRating: '',
      recommendPercentage: ''
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProductId !== prevProps.currentProductId) {
      helperFunction.getAllMetaReviews(this.props.currentProductId)
        .then((response) => {
          console.log(response.data);
           let ratingsObject = response.data.ratings;
           let recommendObject = response.data.recommended;
            this.setState({
              averageRating: helperFunction.averageRating(ratingsObject),
              averageStarRating: helperFunction.averageRating(ratingsObject),
              recommendPercentage: helperFunction.recommendPercentage(recommendObject)
            })
          })
          .catch(err => {
            console.log(err);
          })
    }
  }

  render() {
    let starOutline = <FontAwesomeIcon icon={emptyStar} />;
    let starSolid = <FontAwesomeIcon icon={fullStar} />;

    return (
      <div>
        <div id="rating-summary">
          <div className="rating-average">{this.state.averageRating}</div>
          <div className="rating-star-average">
            <h5><Rating emptySymbol={starOutline} fullSymbol={starSolid} fractions={2} initialRating={this.state.averageStarRating} readonly/></h5>
          </div>
          <div className="rating-recommend-percentage">
            {this.state.recommendPercentage}
          </div>
        </div>
      </div>
    );
  }
}

export default RatingsBreakdown;