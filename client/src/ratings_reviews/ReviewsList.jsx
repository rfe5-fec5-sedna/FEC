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
      sortOption: 'Relevant'
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProductId !== prevProps.currentProductId) {
      helperFunction.getAllReviews(this.props.currentProductId)
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

        // helperFunction.getAllSortOptions(this.props.currentProductId, this.state.sortOption)
        //   .then((response) => {
          //     console.log(response);
          //     let sortedReviews = response.data.results;
          //     this.setState({
            //       reviewsList: sortedReviews
            //     })
            //   })
            //   .catch(err => {
              //     console.log(err);
              //   })
            }
          }

  render() {
    // const dropdownList = [{relevant: 'relevant', newest: 'newest', helpful: 'helpful'}];
    return (
      <div id="reviews-list">
        <div className="sorting-option">
        {/* <h3>{helperFunction.reviewListLength(this.state.reviewsList, this.state.sortOption)} </h3> */}
          <SortOptions listLength={this.state.reviewsList} sortingTitle={this.state.sortOption} />
        </div>
        <ReviewTile productId={this.props.currentProductId} reviewsList={this.state.reviewsList} sortOption={this.state.sortOption} />
      </div>
    );
  }
}

export default ReviewsList;