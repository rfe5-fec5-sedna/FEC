import React from 'react';
import api from './api.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 'Select Size',
      maxQuantity: '',
      quantity: 'Select a Size to Start',
      sizeSelected: true
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if(this.props.skus !== prevProps.skus) {
      this.setState ({
        size: 'Select Size',
        maxQuantity: '',
        quantity: '',
        sku_id: ''
      })
    }
  }

  handleChange(e) {
    e.preventDefault();
    console.log('this is quantity target', e.target)
    const target = e.target;
    const value = target.value;
    const name = target.name;
    const size = name === 'size' ? value : null;

    if(size !== null && value !== 'Select Size') {
      var maxQuantity;
      for(var key in this.props.skus) {
        const combo = this.props.skus[key];
        if(combo.size === size) {
          maxQuantity = combo.quantity;
          break;
        }
      }
      this.setState({
        [name]: value,
        maxQuantity: maxQuantity,
        sku_id: key
      })
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.size === 'Select Size') {
      this.setState({
        sizeSelected: false
      })
    } else {
      this.setState({
        sizeSelected: true
      }, () => {
        api.addCart(this.state.sku_id, (error, result) => {
          if(error) {
            console.log(error);
          } else {
            console.log('Item Sucessfully Added', result);
          }
        })
      })
    }

  }

  render() {
    const quantity = [...Array(this.state.maxQuantity >= 15 ? 16 : this.state.maxQuantity + 1).keys()]
    quantity.splice(0,1);

    return (
      <div>
        <div className="cart-container">
        {this.state.sizeSelected === false && <div className="notification">Please Select Size</div> }
        <select className="selectSize" type="text" name="size" value={this.state.size} onChange={this.handleChange}>
          <option value="Select Size">Select Size</option>
          {Object.keys(this.props.skus).map((key) => {
            return(
              <option key={key} value={this.props.skus[key].size}>{this.props.skus[key].size}</option>
            )
          })}
        </select>
        <select className="selectQuantity" type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange} >
          {this.state.size === 'Select Size' && <option value="Select a Size to Start">Select a Size to Start</option>}
          {quantity.map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        </div>
        <div className="addCart">
          <button className="addCartbtn" onClick={this.handleSubmit}>ADD TO BAG <FontAwesomeIcon icon={faShoppingCart} className="shoppingCart" />
          </button>
        </div>
      </div>

    )
  }
}




export default Cart;
