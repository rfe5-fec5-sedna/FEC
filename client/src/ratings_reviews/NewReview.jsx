import React from "react";
import OverallRating from "./OverallRating.jsx";
import CharNewReview from "./CharNewReview.jsx";
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
      currentPhoto: null,
      name: "",
      email: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStarClick = this.handleStarClick.bind(this);
    this.handleCharacteristicsChange = this.handleCharacteristicsChange.bind(this);
    this.handleCurrentPhoto = this.handleCurrentPhoto.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    })
  }

  handleStarClick(value) {
    this.setState({
      overallRating: value,
    });
  }

  handleCharacteristicsChange(e) {
    const characteristics = this.state.characteristics;
    characteristics[e.target.name] = e.target.value;
    this.setState({
      characteristics: {
        [e.target.name]: Number(e.target.value)
      }
    })
  }

  handleCurrentPhoto(e) {
    this.setState({
      currentPhoto: [e.target.value]
    })
  }

  handleFileUpload(e) {
    e.preventDefault();
    this.setState({
      photos: this.state.photos.concat(this.state.currentPhoto)
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let newReviewData = {
      product_id: this.props.productId,
      rating: Number(this.state.overallRating),
      recommend: Boolean(this.state.productRecommend),
      characteristics: this.state.characteristics,
      summary: this.state.reviewSummary,
      body: this.state.reviewBody,
      photos: this.state.photos,
      name: this.state.name,
      email: this.state.email
    };

    helperFunction.postNewReview(newReviewData)
      .then((response) => {
        helperFunction.getAllReviews(this.props.productId)
          .then((response) => {
            console.log(response.data.results);
          })
          .catch((err) => {
            console.log(err);
          });
        // this.props.handleMoreReviewsClick();
        // this.props.closeNewReview();
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
          <h3 className="new-review-title">About the Product</h3>
          <div id="new-review-modal-form">
            <form>
              Overall Rating:<span style={{color: "red"}}>*</span>
              <div id="new-review-overall-rating">
                <OverallRating
                  starRating={this.state.overallRating}
                  onChange={this.handleStarClick}
                  required
                />
              </div>
              <div className="radio-product-recommend">
                Do you recommend this product?<span style={{color: "red"}}>*</span>
                <label>
                  <input
                    type="radio"
                    name="productRecommend"
                    value="true"
                    checked={this.state.productRecommend === "true"}
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
                    value="false"
                    checked={this.state.productRecommend === "false"}
                    onChange={this.handleInputChange}
                    className="radio-product-recommend-input"
                    required
                  />
                  No
                </label>
              </div>
              Characteristics:<span style={{color: "red"}}>*</span>
              <div id="new-review-characteristics">
                <CharNewReview
                  productId={this.props.productId}
                  handleCharChange={this.handleCharacteristicsChange}
                  required
                />
              </div>
              Review Summary:
              <div id="new-review-summary">
                <textarea
                  type="text"
                  minLength="0"
                  maxLength="60"
                  name="reviewSummary"
                  placeholder="Example: Best purchase ever!"
                  onChange={this.handleInputChange}
                  value={this.state.reviewSummary}
                />
              </div>
              Review Body:<span style={{color: "red"}}>*</span>
              <div id="new-review-body">
                <textarea
                  type="text"
                  minLength="50"
                  maxLength="1000"
                  name="reviewBody"
                  placeholder="Why did you like the product or not?"
                  onChange={this.handleInputChange}
                  value={this.state.reviewBody}
                  required
                />
                <br></br>
                {helperFunction.minCharacters(50 - this.state.reviewBody.length)}
              </div>
              Photo Upload:
              <div id="new-review-photo-upload">
                <input
                  type="text"
                  onChange={this.handleCurrentPhoto}
                />
                {helperFunction.photoUploadLimit(this.state.photos.length) && (
                  <button
                    type="submit"
                    id="new-review-photo-submit"
                    value={this.state.currentPhoto}
                    onClick={this.handleFileUpload}
                  >
                    Upload
                  </button>
                )}
              </div>
              Name:<span style={{color: "red"}}>*</span>
              <div id="new-review-name">
                <input
                  type="text"
                  name="name"
                  placeholder="Example: jackson11!"
                  maxLength="60"
                  className="new-review-name-input"
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              For privacy reasons, do not use your full name or email address.
              <br></br>
              Email:<span style={{color: "red"}}>*</span>
              <div id="new-review-email">
                <input
                  type="text"
                  name="email"
                  placeholder="Example: jackson11@email.com"
                  maxLength="60"
                  className="new-review-email-input"
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              For authentication reasons, you will not be emailed.
              <br></br>
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
