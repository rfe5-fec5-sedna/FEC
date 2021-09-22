import React from "react";
import ReviewTile from "./ReviewTile.jsx";
import NewReview from "./NewReview.jsx";
import helperFunction from "./helperFunction.js";
import "./styles/ReviewsList.css";
import "./styles/NewReview.css";

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsList: [],
      shortList: [],
      allReviewsDisplayed: false,
      sortOption: "relevant",
      openModal: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMoreReviewsClick = this.handleMoreReviewsClick.bind(this);
    this.openNewReviewClick = this.openNewReviewClick.bind(this);
    this.closeNewReviewClick = this.closeNewReviewClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProductId !== prevProps.currentProductId) {
      helperFunction.getAllReviews(this.props.currentProductId)
        .then((response) => {
          let allReviews = response.data.results;
          this.setState({
            reviewsList: allReviews.slice(0, 2),
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  handleChange(e) {
    let newSort = e.target.value;
    this.setState({
      sortOption: newSort
    });
    helperFunction.getAllReviewsWithSort(this.props.currentProductId, newSort)
      .then((response) => {
        let allReviewsWithSort = response.data.results;
        if (this.state.allReviewsDisplayed) {
          this.setState({
            reviewsList: allReviewsWithSort
          });
        } else {
          this.setState({
            reviewsList: allReviewsWithSort.slice(0, 2)
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleMoreReviewsClick(e) {
    e.preventDefault();
    helperFunction.getAllReviews(this.props.currentProductId)
      .then((response) => {
        let allReviews = response.data.results;
        this.setState({
          reviewsList: allReviews,
          allReviewsDisplayed: true
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  openNewReviewClick(e) {
    e.preventDefault();
    this.setState({
      openModal: true,
    });
  }

  closeNewReviewClick(e) {
    e.preventDefault();
    this.setState({
      openModal: false,
    });
  }

  render() {
    return (
      <div id="reviews-list">
        <div className="single-review-tile">
          <div id="sorting-option-header">
            <h3>
              {helperFunction.reviewListLength(
                this.state.reviewsList,
                this.state.sortOption
              )}
              <select
                value={this.state.sortOption}
                onChange={this.handleChange}
                id="sort-option-button"
              >
                <option value={"none"}>None</option>
                <option value="relevant">Relevant</option>
                <option value="newest">Newest</option>
                <option value="helpful">Helpful</option>
              </select>
            </h3>
          </div>
          {this.state.reviewsList.map((singleReview) => {
            return (
              <ReviewTile
                key={singleReview.review_id}
                productId={this.props.currentProductId}
                singleReview={singleReview}
              />
            );
          })}
          <div id="ratings-button-container">
            <div id="ratings-more-reviews">
              <form onClick={this.handleMoreReviewsClick}>
                <button type="submit" id="more-reviews-button">
                  MORE REVIEWS
                </button>
              </form>
            </div>
            <div id="ratings-new-review">
              <form onClick={this.openNewReviewClick}>
                <button type="submit" id="add-review-button">
                  ADD A REVIEW +
                </button>
              </form>
            </div>
          </div>
          <div id="ratings-new-review-modal">
            {this.state.openModal && (
              <div
                className="modal-background">
                <NewReview
                  productId={this.props.currentProductId}
                  openModal={this.state.openModal}
                  closeNewReview={this.closeNewReviewClick}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewsList;
