import React from 'react';

class Style extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStyle: ''
    }
  }

  render() {
    return (
      <div className="styleSelector">Placeholder for Style Selector</div>
    )
  }
}

export default Style;