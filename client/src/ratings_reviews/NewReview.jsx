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
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    console.log("Submit Review clicked");
    e.preventDefault();
    helperFunction.postNewReview(this.props.productId)
      .then((response) => {
        // console.log(response);
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
          <button className="new-review-x-button" onClick={this.props.closeNewReview}>
            x
          </button>
        </div>
        <div id="new-review-modal-body">
          <h3>About the {this.props.productId}</h3>
          <div id="new-review-modal-form">
            <form>
            {/*
              overallRating: "",
              productRecommend: "",
              characteristics: {},
              reviewSummary: "",
              reviewBody: "",
              photos: [],
              nickname: "",
              email: ""
            */}
              <div className="radio-product-recommend">
                  Do you recommend this product?
                <label>
                  <input
                    type="radio"
                    name="productRecommend"
                    value="Yes"
                    checked={this.state.productRecommend === "yes"}
                    onChange={this.handleInputChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="productRecommend"
                    value="No"
                    checked={this.state.productRecommend === "no"}
                    onChange={this.handleInputChange}
                  />
                  No
                </label>
                Selected option is {this.state.productRecommend}
              </div>
              <button
                type="submit"
                id="submit-review-button"
                onClick={this.handleSubmit}
              >
                SUBMIT REVIEW
              </button>
            </form>
          </div>
        </div>
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
