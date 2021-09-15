import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    // this.collections = Object.values(props.skus);

    this.state = {
      size: '',
      maxQuantity: 2,
      quantity: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const size = e.target.value;
    const collections = Object.values(this.props.skus);
    var maxQuantity;
    for(var combo of collections) {
      if(combo.size === size) {
        maxQuantity = combo.quantity;
        break;
      }
    }
    console.log('line 29', size, maxQuantity);
    this.setState({
      size: size,
      maxQuantity: maxQuantity
    })
  }

  render() {
    const quantity = [...Array(this.state.maxQuantity >= 15 ? 15 : this.state.maxQuantity).keys()]
    quantity.splice(0,1);
    console.log('q',quantity)
    return (
      <div>
        <div className="cart-container">
        <select className="selectSize" value={this.state.size} onChange={this.handleChange}>
          {Object.keys(this.props.skus).map((key) => {
            return(
              <option key={key} value={this.props.skus[key].size}>{this.props.skus[key].size}</option>
            )
          })}
        </select>
        <select className="selectQuantity">
          {quantity.map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        </div>
        <div>
          <button className="addCart">ADD TO BAG +</button>
        </div>
      </div>

    )
  }
}




export default Cart;
