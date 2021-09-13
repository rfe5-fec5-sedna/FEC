import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStyle: ''
    }
  }

  render() {
    return (
      <div className="cart">Placeholder for Cart</div>
    )
  }
}

export default Cart;