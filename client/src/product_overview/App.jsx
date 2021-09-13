import React from 'react';
import Review from './review.jsx';


class Overview extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholder: ''
    }
  }

  render() {
    return(
      <div>
         <h2>-----------------Product Overview---------------------{this.props.id}</h2>
         <Review id={this.props.id} />
      </div>
    )
  }
};

export default Overview;

