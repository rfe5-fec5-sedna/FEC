import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import getAllData from './helperFunction.js';
import './styles/ReviewsList.css';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsList: []
    }

  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProductId !== prevProps.currentProductId) {
      getAllData.getAllReviews(this.props.currentProductId)
        .then((response) => {
          let allReviews = response.data.results;
          console.log(allReviews);
          this.setState({
            reviewsList: allReviews
          })
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  render() {
    return (
      <div id="reviews-list">
        <h3>Reviews List</h3>
        <h5>{this.props.currentProductId}</h5>
        <ReviewTile productId={this.props.currentProductId} reviewsList={this.state.reviewsList} />
      </div>
    );
  }
}

export default ReviewsList;