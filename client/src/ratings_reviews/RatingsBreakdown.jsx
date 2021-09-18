import React from 'react';
import helperFunction from './helperFunction.js';
import Rating from 'react-rating';
import './styles/RatingsBreakdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      averageRating: '',
      averageStarRating: '',
      recommendPercentage: '',
      fiveStars: '',
      fourStars: '',
      threeStars: '',
      twoStars: '',
      oneStar: ''
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProductId !== prevProps.currentProductId) {
      helperFunction.getAllMetaReviews(this.props.currentProductId)
        .then((response) => {
          console.log('characteristics:', response.data.characteristics);
          let ratingsObject = response.data.ratings;
          let recommendObject = response.data.recommended;
          this.setState({
            averageRating: helperFunction.averageRating(ratingsObject),
            averageStarRating: helperFunction.averageRating(ratingsObject),
            recommendPercentage: helperFunction.recommendPercentage(recommendObject),
            fiveStars: helperFunction.ratingDistCount(ratingsObject, 5),
            fourStars: helperFunction.ratingDistCount(ratingsObject, 4),
            threeStars: helperFunction.ratingDistCount(ratingsObject, 3),
            twoStars: helperFunction.ratingDistCount(ratingsObject, 2),
            oneStar: helperFunction.ratingDistCount(ratingsObject, 1)
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
          <br></br>
          <div id="rating-distribution">
            <div className="rating-distribution-stars">5 Stars</div>
            <div className="rating-distribution-bars">{this.state.fiveStars}</div><br></br>
            <div className="rating-distribution-stars">4 Stars</div>
            <div className="rating-distribution-bars">{this.state.fourStars}</div><br></br>
            <div className="rating-distribution-stars">3 Stars</div>
            <div className="rating-distribution-bars">{this.state.threeStars}</div><br></br>
            <div className="rating-distribution-stars">2 Stars</div>
            <div className="rating-distribution-bars">{this.state.twoStars}</div><br></br>
            <div className="rating-distribution-stars">1 Star</div>
            <div className="rating-distribution-bars">{this.state.oneStar}</div><br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default RatingsBreakdown;