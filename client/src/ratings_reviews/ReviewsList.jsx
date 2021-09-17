import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import helperFunction from './helperFunction.js';
import SortOptions from './SortOptions.jsx';
import './styles/ReviewsList.css';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsList: [],
      sortOption: 'newest'
    }
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProductId !== prevProps.currentProductId) {
      helperFunction.getAllReviews(this.props.currentProductId)
        .then((response) => {
            let allReviews = response.data.results;
            this.setState({
              reviewsList: allReviews
            })
          })
          .catch(err => {
            console.log(err);
          })

      // FIX_ME!!
      helperFunction.getAllSortOptions(this.props.currentProductId, this.state.sortOption)
        .then((response) => {
            let sortedReviews = response.data.results;
            // console.log(response.data);
            this.setState({
                reviewsList: sortedReviews
              })
            })
            .catch(err => {
                console.log(err);
              })
    }
  }

  handleChange(e) {
    this.setState({
      sortOption: e.target.value
    });
  }

  render() {
    return (
      <div id="reviews-list">
        {/* <div className="sorting-option"> */}
        {/* <h3>{helperFunction.reviewListLength(this.state.reviewsList, this.state.sortOption)} </h3> */}
          <SortOptions listLength={this.state.reviewsList} sortingTitle={this.state.sortOption} onChange={this.handleChange} />
        {/* </div> */}
          <ReviewTile productId={this.props.currentProductId} reviewsList={this.state.reviewsList} sortOption={this.state.sortOption} />
      </div>
    );
  }
}

export default ReviewsList;