import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDiscord} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faPinterest} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';


const Product_info1 = (props) => {
  return(
    <div className="productInfo1">
      <div>Category: {props.category}</div>
      <div>Product Name:{props.title}</div>
      {props.price[1] &&
      <div>
      <div className="salePrice">Sale: {props.price[1]}</div>
      <div className="regularSale">Regular Price: {props.price[0]}</div>
      </div>
      }
      {props.price[1] === null && <div className="regularPrice">Price: {props.price[0]}</div>}
    </div>
  )
}


const Product_info2 = (props) => {
  return(
    <div className="productInfo2">
      <div className="textDescription">
        <span>Slogan: {props.slogan}</span>
        <div>Description: {props.description}</div>
      </div>
      <div className="share">
      <FontAwesomeIcon icon={faDiscord} />
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faPinterest} />
      <FontAwesomeIcon icon={faFacebook} />
      </div>
    </div>

  )
}

export {
  Product_info1,
  Product_info2
}