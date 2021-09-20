import React from 'react';
import helperFunction from './helperFunction.js';
import ProductBreakdown from './ProductBreakdown.jsx';
import Rating from 'react-rating';
import './styles/RatingsBreakdown.css';
import styled from 'styled-components';
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
          // console.log('characteristics:', response.data.characteristics);
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
        </div>
        <div id="rating-distribution">
          <div className="rating-distribution-stars">5 Stars</div>
          <div className="rating-distribution-bars">
            <BarGraphStyling>
              <StarShading shade={this.state.fiveStars}>.</StarShading>
              <StarDarkShading darkShade={this.state.fiveStars}>.</StarDarkShading>
            </BarGraphStyling>
          </div><br></br>
          <div className="rating-distribution-stars">4 Stars</div>
          <div className="rating-distribution-bars">
            <BarGraphStyling>
              <StarShading shade={this.state.fourStars}>.</StarShading>
              <StarDarkShading darkShade={this.state.fourStars}>.</StarDarkShading>
            </BarGraphStyling></div><br></br>
          <div className="rating-distribution-stars">3 Stars</div>
          <div className="rating-distribution-bars">
            <BarGraphStyling>
              <StarShading shade={this.state.threeStars}>.</StarShading>
              <StarDarkShading darkShade={this.state.threeStars}>.</StarDarkShading>
            </BarGraphStyling></div><br></br>
          <div className="rating-distribution-stars">2 Stars</div>
          <div className="rating-distribution-bars">
            <BarGraphStyling>
              <StarShading shade={this.state.twoStars}>.</StarShading>
              <StarDarkShading darkShade={this.state.twoStars}>.</StarDarkShading>
            </BarGraphStyling></div><br></br>
          <div className="rating-distribution-stars">1 Star</div>
          <div className="rating-distribution-bars">
            <BarGraphStyling>
              <StarShading shade={this.state.oneStar}>.</StarShading>
              <StarDarkShading darkShade={this.state.oneStar}>.</StarDarkShading>
            </BarGraphStyling></div><br></br>
        </div>
        <div id="product-breakdown">
          <ProductBreakdown productId={this.props.currentProductId} />
        </div>
      </div>
    );
  }
}

// Bar Graph Styled Components

const BarGraphStyling = styled.div`
  width: 300px;
  display: flex;
  height: 10px;
`;

const StarShading = styled.div`
  background: green;
  width: ${props => props.shade}%;
  color: green;
  margin-left: 10px;
  &:hover {
    opacity: 0.8;
  }
  font-size: 1px;
`;

const StarDarkShading = styled.div`
  background: lightgray;
  width: ${props => 100 - props.darkShade}%;
  color: grey;
  margin-right: 25px;
  &:hover {
    opacity: 0.8;
  }
  font-size: 1px;
`;

export default RatingsBreakdown;