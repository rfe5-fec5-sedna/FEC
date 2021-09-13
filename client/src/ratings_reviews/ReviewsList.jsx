import React from 'react';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default: 'state here'
    }
  }

  render() {
    return (
      <div>
        <h1>Reviews List </h1>
      </div>
    )
  }
}

export default ReviewsList;