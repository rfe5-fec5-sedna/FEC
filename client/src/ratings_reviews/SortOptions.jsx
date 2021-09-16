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
      <div className="sorting-dropdown-list">
        <h3>{helperFunction.reviewListLength(this.props.listLength, listTitle)} </h3>
        <select value={listTitle} onChange={this.handleChange}>
          <option value="Relevant">Relevant</option>
          <option value="Newest">Newest</option>
          <option value="Helpful">Helpful</option>
        </select>
      </div>
    );
  }
}

export default SortOptions;