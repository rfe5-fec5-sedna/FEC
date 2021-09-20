import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import helperFunction from './helperFunction.js';
import './styles/ReviewsList.css';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsList: [],
      sortOption: 'relevant'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    }
  }

  handleChange(e) {
    let newSort = e.target.value;
    this.setState({
      sortOption: newSort,
    })
    helperFunction.getAllReviewsWithSort(this.props.currentProductId, newSort)
      .then((response) => {
        let allReviewsWithSort = response.data.results;
        this.setState({
          reviewsList: allReviewsWithSort
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleClick(e) {
    e.preventDefault();
    console.log('Clicked');
  }

  render() {
    return (
      <div id="reviews-list">
        <div className="single-review-tile">
          <div id="sorting-option-header">
            <h3>{helperFunction.reviewListLength(this.state.reviewsList, this.state.sortOption)}
            <select value={this.state.sortOption} onChange={this.handleChange} id="sort-option-button">
              <option value={"none"}>None</option>
              <option value="relevant">Relevant</option>
              <option value="newest">Newest</option>
              <option value="helpful">Helpful</option>
            </select>
            </h3>
          </div>
          {this.state.reviewsList.map((singleReview) => {
            return (
              <ReviewTile key={singleReview.review_id} productId={this.props.currentProductId} singleReview={singleReview} />
            );
          })}
          <div id="ratings-button-container">
            <div id="ratings-more-reviews">
              <form onClick={this.handleClick}>
                <button type="submit" id="more-reviews-button">MORE REVIEWS</button>
              </form>
            </div>
            <div id="ratings-new-review">
              <form onClick={this.handleClick}>
                <button type="submit" id="new-review-button">ADD A REVIEW +</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewsList;
// ReviewsList holds select dropdown
// ex: numbers === sortedReviews
// based on the sorting option, fetch reviews from api
// sortedReviews.map(review => { <ReviewTile data={review} />

// change sortoption state with handleChange

// use your helper function to fetch sorted reviews
// inside of return in ReviewsList

// sortedReviews.map(review => {
//   return (
//     <ReviewTile username={review.username} date={review.data}/>
//   )
// })