import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDiscord} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faPinterest} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';


const Product_info = (props) => {
  return(
    <div className="productInfo">
      <div>Category: {props.category}</div>
      <div>Product Name:{props.title}</div>
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

export default Product_info;