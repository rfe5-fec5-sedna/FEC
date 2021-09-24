import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDiscord} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faPinterest} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';


const Product_info1 = (props) => {
  return (
    <div className="productInfo1">
      <div className="category" data-testid="category">
        {props.category}
      </div>
      <div className="name" data-testid="name">
        {props.title}
      </div>
      {props.price[1] && (
        <div>
          <div className="salePrice" data-testid="salePrice">
            Sale: ${props.price[1]}
          </div>
          <div className="regularSale" data-testid="regularSale">
            Regular Price: ${props.price[0]}
          </div>
        </div>
      )}
      {props.price[1] === null && (
        <div className="regularPrice" data-testid="regularPrice">
          Price: ${props.price[0]}
        </div>
      )}
    </div>
  );
};


const Product_info2 = (props) => {
  return (
    <div className="productInfo2">
      <div className="textDescription" data-testid="sloganDescription">
        <span className="slogan">{props.slogan}</span>
        <div className="description">{props.description}</div>
      </div>
      <div className="features">
        {props.features.map((feature, index) => (
          <div key={index} className="individual-feature">&#10003; {feature.feature} : {feature.value}</div>
        ))}

      </div>
    </div>
  );
};


export {
  Product_info1,
  Product_info2
}

