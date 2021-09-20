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
        <span className="reviewCount" data-testid="reviewCount">Read all {props.count} reviews</span>
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


// class Review extends React.Component {
//   constructor(props) {
//     super(props);

//     this.solid = <FontAwesomeIcon icon={starSolid} />
//     this.outline = <FontAwesomeIcon icon={starOutline} />

//     this.state = {
//       count: '',
//       rating: ''
//     }
//   }

//   componentDidUpdate(prevProps) {
//     if(this.props.id !== prevProps.id) {
//       // console.log(this.props)
//       api.getReview(this.props.id, (error, result) => {
//       if(error) {
//         console.log(error);
//       } else {
//         // console.log('this is star', result)
//         this.setState({
//           rating: api.starCalc(result)
//         })
//       }
//     })
//     };

//     if(this.props.id !== prevProps.id) {
//       api.getCount(this.props.id, (error, result) => {
//       if(error) {
//         console.log(error);
//       } else {
//         this.setState({
//           count: result
//         })
//       }
//     })
//     };
//   }

//   render() {
//     return (
//       <div className="ratings">
//         <Rating  emptySymbol={this.outline} fullSymbol={this.solid}  initialRating={this.state.rating} readonly/>
//         <span className="reviewCount">Read all {this.state.count} reviews</span>
//       </div>
//     )
//   }
// };