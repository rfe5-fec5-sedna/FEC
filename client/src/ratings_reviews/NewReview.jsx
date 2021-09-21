import React from 'react';
import helperFunction from './helperFunction.js';
import './styles/NewReview.css';

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: this.props.productId,
      overallRating: '',
      productRecommend: '',
      characteristics: {},
      reviewSummary: '',
      reviewBody: '',
      photos: [],
      nickname: '',
      email: '',
      submitReview: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }






  handleSubmit(e) {
    console.log('Submit Review clicked')
    e.preventDefault();
    helperFunction.postNewReview(this.props.currentProductId)
        .then((response) => {
            console.log(response);
            // this.setState({
            //   reviewsList: allReviews,
            //   allReviewsDisplayed: true
            // })
          })
        .catch(err => {
          console.log(err);
        })
  }









  render() {
    return (
      <div id="new-review-modal">
        <div id="new-review-modal-header">
          <form>
            {/* <button type="submit" id="submit-review-button" onClick={this.handleSubmit}>
              SUBMIT REVIEW
            </button> */}
          </form>
        </div>
      </div>
    );
  }
}

export default NewReview;