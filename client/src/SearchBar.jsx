import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchDollar } from '@fortawesome/free-solid-svg-icons'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchProduct: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form id="search-bar">
        <input
          placeholder="Search Item"
          id="search-input-bar"
          name="searchProduct"
          value={this.state.searchProduct}
          onChange={this.handleInputChange}
        />
        <button onClick={(e) => {
          this.props.handleClick(e, this.state.searchProduct);
          this.state.searchProduct = ''
        }}>{<FontAwesomeIcon icon={faSearchDollar} size="lg" />}</button>
      </form >
    );
  }
}

export default SearchBar;