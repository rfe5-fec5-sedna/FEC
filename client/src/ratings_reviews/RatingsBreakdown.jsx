import React from 'react';
import helperFunction from './helperFunction.js';

class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      averageRating: ''
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProductId !== prevProps.currentProductId) {
      helperFunction.getAllMetaReviews(this.props.currentProductId)
        .then((response) => {
           let ratingsObject = response.data.ratings;
            this.setState({
              averageRating: helperFunction.averageRating(ratingsObject)
            })
          })
          .catch(err => {
            console.log(err);
          })
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.averageRating}</h1>
      </div>
    );
  }
}

export default RatingsBreakdown;