import React from "react";
import helperFunction from "./helperFunction.js";
import "./styles/NewReview.css";

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overallRating: "",
      productRecommend: "",
      characteristics: {},
      reviewSummary: "",
      reviewBody: "",
      photos: [],
      nickname: "",
      email: "",
      submitReview: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log("Submit Review clicked");
    e.preventDefault();
    helperFunction.postNewReview(this.props.productId)
      .then((response) => {
        console.log(response);
        // this.setState({
        //   reviewsList: allReviews,
        //   allReviewsDisplayed: true
        // })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div id="new-review-modal">
        <div id="new-review-modal-header">
          <h1>Write Your Review</h1>
          <span className="new-review-x-button" onClick={this.props.closeNewReview}>
            x
          </span>
        </div>
        <div id="new-review-modal-body">
          <h3>About the {this.props.productId}</h3>
        </div>
        <form>
          <button
            type="submit"
            id="submit-review-button"
            onClick={this.handleSubmit}
          >
            SUBMIT REVIEW
          </button>
        </form>
        <div id="new-review-modal-footer">
          <form>
            <button
              type="submit"
              id="close-review-button"
              onClick={this.props.closeNewReview}
            >
              CLOSE
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewReview;
