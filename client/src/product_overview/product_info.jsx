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
  return(
    <div className="productInfo2">
      <div className="textDescription" data-testid="sloganDescription">
        <span className="slogan">{props.slogan}</span>
        <div className="description">{props.description}</div>
      </div>
      <div className="share">
      <FontAwesomeIcon icon={faDiscord} className="icon d" size="lg" onClick={() => handleClick("discord")}/>
      <FontAwesomeIcon icon={faTwitter} className="icon t" size="lg" onClick={() => handleClick("twitter")} />
      <FontAwesomeIcon icon={faPinterest} className="icon p" size="lg" onClick={() => handleClick("pinterest")}/>
      <FontAwesomeIcon icon={faFacebook} className="icon f" size="lg" onClick={() => handleClick("facebook")}/>
      </div>
    </div>

  )
}

var url = "http://localhost:3000/sedna/"

const handleClick = (name) => {
  var shareUrl;
  if (name === "facebook") {
    shareUrl = `http://www.facebook.com/sharer/sharer.phpu=${url}`;
  } else if (name === "twitter") {
    shareUrl = 'https://twitter.com/intent/tweet';
  } else if (name === "discord") {
    shareUrl = 'https://discord.com/login';
  } else if (name === "pinterest") {
    shareUrl = "https://www.pinterest.com/";
  }

  window.open(shareUrl, "NewWindow", 'Please check out this great product');
}

export {
  Product_info1,
  Product_info2
}