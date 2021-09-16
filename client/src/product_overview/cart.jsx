import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: '',
      maxQuantity: '',
      quantity: 'Select a Size to Start'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if(this.props.skus !== prevProps.skus) {
      this.setState ({
        size: '',
        maxQuantity: '',
        quantity: ''
      })
    }
  }

  handleChange(e) {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    const name = target.name;
    const size = name === 'size' ? value : null;

    if(size !== null) {
      const collections = Object.values(this.props.skus);
      var maxQuantity;
      for(var combo of collections) {
        if(combo.size === size) {
          maxQuantity = combo.quantity;
          break;
        }
      }
      this.setState({
        [name]: value,
        maxQuantity: maxQuantity
      })
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  render() {
    const quantity = [...Array(this.state.maxQuantity >= 15 ? 16 : this.state.maxQuantity + 1).keys()]
    quantity.splice(0,1);

    return (
      <div>
        <div className="cart-container">
        <select className="selectSize" type="text" name="size" value={this.state.size} onChange={this.handleChange}>
          <option value="Select Size">Select Size</option>
          {Object.keys(this.props.skus).map((key) => {
            return(
              <option key={key} value={this.props.skus[key].size}>{this.props.skus[key].size}</option>
            )
          })}
        </select>
        <select className="selectQuantity" type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange} >
          {this.state.size === '' && <option value="Select a Size to Start">Select a Size to Start</option>}
          {quantity.map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        </div>
        <div className="addCart">
          <button className="addCartbtn">ADD TO BAG <FontAwesomeIcon icon={faShoppingCart} className="shoppingCart"/>
          </button>
        </div>
      </div>

    )
  }
}




export default Cart;
