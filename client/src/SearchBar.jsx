import React from 'react';

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
      <form>
        <input
          name="searchProduct"
          value={this.state.searchProduct}
          onChange={this.handleInputChange}
        />
        <button onClick={(e) => {
          this.props.handleClick(e, this.state.searchProduct);
          this.state.searchProduct = ''
        }}>+</button>
      </form >
    );
  }
}

export default SearchBar;