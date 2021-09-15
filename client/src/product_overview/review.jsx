import React from 'react';
import api from './api.js';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as starSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as starOutline } from '@fortawesome/free-regular-svg-icons'

class Review extends React.Component {
  constructor(props) {
    super(props);

    this.solid = <FontAwesomeIcon icon={starSolid} />
    this.outline = <FontAwesomeIcon icon={starOutline} />

    this.state = {
      count: '',
      rating: ''
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.id !== prevProps.id) {
      // console.log(this.props)
      api.getReview(this.props.id, (error, result) => {
      if(error) {
        console.log(error);
      } else {
        console.log('this is star', result)
        this.setState({
          rating: api.starCalc(result)
        })
      }
    })
    };

    if(this.props.id !== prevProps.id) {
      api.getCount(this.props.id, (error, result) => {
      if(error) {
        console.log(error);
      } else {
        this.setState({
          count: result
        })
      }
    })
    };
  }

  render() {
    return (
      <div className="ratings">
        <Rating  emptySymbol={this.outline} fullSymbol={this.solid}  initialRating={this.state.rating} readonly/>
        <div>Read all {this.state.count} reviews</div>
      </div>
    )
  }
};


export default Review;