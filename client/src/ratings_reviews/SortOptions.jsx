import React from 'react';
import helperFunction from './helperFunction.js';

class SortOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listTitle: this.props.sortingTitle
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      listTitle: e.target.value
    });
  }

  render() {
    const { listTitle } = this.state;
    return (
      <div>
        <h3>{helperFunction.reviewListLength(this.props.listLength, listTitle)} </h3>
        <select value={listTitle} onChange={(e) => this.handleChange(e)}>
          <option value="relevant">Relevant</option>
          <option value="newest">Newest</option>
          <option value="helpful">Helpful</option>
        </select>
      </div>
    );
  }
}

export default SortOptions;