import React from 'react';

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
        Was this review helpful? <button onClick={this.handleYesClick}> Yes {this.state.totalYesCount}</button> <button onClick={this.handleNoClick}> No {this.state.totalNoCount}</button>
      </div>
    )
  }
}

export default RatingHelpfulness;