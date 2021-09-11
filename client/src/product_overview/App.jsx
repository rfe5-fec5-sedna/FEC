import React from 'react';

class Overview extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholder: this.props.id || ''
    }
  }

  render() {
    return(
      <div>
         <h3>placeholder for Product Overview</h3>
      </div>
    )
  }
};

export default Overview;

