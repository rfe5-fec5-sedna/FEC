import React from "react";
import helperFunction from "./helperFunction.js";
import "./styles/NewReview.css";

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overallRating: "",
      productRecommend: null,
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
              characteristics: {},
              reviewSummary: "",
              reviewBody: "",
              photos: [],
              nickname: "",
              email: ""
            */}
              Overall Rating:
              <div id="new-review-overall-rating">
                {this.state.overallRating}
              </div>
              <div className="radio-product-recommend">
                  Do you recommend this product?<span style={{color: "red"}}>*</span>
                  <label>
                    <input
                      type="radio"
                      name="productRecommend"
                      value="Yes"
                      checked={this.state.productRecommend === "Yes"}
                      onChange={this.handleInputChange}
                      className="radio-product-recommend-input"
                      required
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="productRecommend"
                      value="No"
                      checked={this.state.productRecommend === "No"}
                      onChange={this.handleInputChange}
                      className="radio-product-recommend-input"
                      required
                    />
                    No
                  </label>
                You selected: {this.state.productRecommend}
              </div>
              Review Summary:
              <div id="new-review-summary">
                <textarea
                  type="text"
                  maxlength="60"
                  name="reviewSummary"
                  placeholder="Example: Best purchase ever!"
                  onChange={this.handleInputChange}
                  value={this.state.reviewSummary}
                />
              </div>
              Review Body: <span style={{color: "red"}}>*</span>
              <div id="new-review-body">
                <textarea
                  type="text"
                  minLength="50"
                  maxlength="1000"
                  name="reviewBody"
                  placeholder="Why did you like the product or not?"
                  onChange={this.handleInputChange}
                  value={this.state.reviewBody}
                  required
                />
                {helperFunction.minCharacters(50 - this.state.reviewBody.length)}
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
