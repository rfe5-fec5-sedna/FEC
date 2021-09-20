import React from 'react';
import './styles/RatingHelpfulness.css';

class RatingHelpfulness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalYesCount: this.props.yesCount,
      totalNoCount: 0
    }
  }

  handleYesClick = () => {
    this.setState({
      totalYesCount: this.state.totalYesCount + 1
    })
  }

  handleNoClick = () => {
    this.setState({
      totalNoCount: this.state.totalNoCount + 1
    })
  }

  render() {
    return (
      <div>
        Was this review helpful? <button id="yes-button" onClick={this.handleYesClick}> Yes {this.state.totalYesCount}</button> <button id="no-button" onClick={this.handleNoClick}> No {this.state.totalNoCount}</button>
      </div>
    )
  }
}

export default RatingHelpfulness;