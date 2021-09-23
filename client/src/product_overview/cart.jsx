import React from 'react';
import api from './api.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import {faDiscord} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faPinterest} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: "Find Your Size",
      maxQuantity: "",
      quantity: "Select Quantity",
      sizeSelected: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShare = this.handleShare.bind(this);
    this.url = "http://localhost:3000/sedna/";
  }

  componentDidUpdate(prevProps) {
    if (this.props.skus !== prevProps.skus) {
      this.setState({
        size: "Find Your Size",
        maxQuantity: "",
        quantity: "",
        sku_id: "",
      });
    }
  }

  handleChange(e) {
    e.preventDefault();
    // console.log('this is quantity target', e.target)
    const target = e.target;
    const value = target.value;
    const name = target.name;
    const size = name === "size" ? value : null;

    if (size !== null && value !== "Find Your Size") {
      var maxQuantity;
      for (var key in this.props.skus) {
        const combo = this.props.skus[key];
        if (combo.size === size) {
          maxQuantity = combo.quantity;
          break;
        }
      }
      this.setState({
        [name]: value,
        maxQuantity: maxQuantity,
        sku_id: key,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.size === "Find Your Size") {
      this.setState({
        sizeSelected: false,
      });
    } else {
      this.setState(
        {
          sizeSelected: true,
        },
        () => {
          api.addCart(this.state.sku_id, (error, result) => {
            if (error) {
              console.log(error);
            } else {
              console.log("Item Sucessfully Added", result);
            }
          });
        }
      );
    }
  }

  handleShare = (name) => {
    var shareUrl;
    if (name === "facebook") {
      shareUrl = `http://www.facebook.com/sharer/sharer.phpu=${this.url}`;
    } else if (name === "twitter") {
      shareUrl = "https://twitter.com/intent/tweet";
    } else if (name === "discord") {
      shareUrl = "https://discord.com/login";
    } else if (name === "pinterest") {
      shareUrl = "https://www.pinterest.com/";
    }

    window.open(shareUrl, "NewWindow", "Please check out this great product");
  };

  render() {
    const quantity = [
      ...Array(
        this.state.maxQuantity >= 15 ? 16 : this.state.maxQuantity + 1
      ).keys(),
    ];
    quantity.splice(0, 1);

    return (
      <div>
        <div className="cart-container">
          {this.state.sizeSelected === false && (
            <div className="notification">Please Select Size</div>
          )}
          <select
            className="selectSize"
            type="text"
            name="size"
            value={this.state.size}
            onChange={this.handleChange}
          >
            <option value="Find Your Size">Find Your Size</option>
            {Object.keys(this.props.skus).map((key) => {
              return (
                <option key={key} value={this.props.skus[key].size}>
                  {this.props.skus[key].size}
                </option>
              );
            })}
          </select>
          <select
            className="selectQuantity"
            type="number"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          >
            {this.state.size === "Find Your Size" && (
              <option value="Select Quantity">Select Quantity</option>
            )}
            {quantity.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="addCart">
          <button className="addCartbtn" onClick={this.handleSubmit}>
            ADD TO BAG
          </button>
          <span className="bookMark">
            <FontAwesomeIcon icon={faBookmark} className="bookMarkIcon" />
          </span>
        </div>
        <div className="share">
          <FontAwesomeIcon
            icon={faDiscord}
            className="icon d"
            size="lg"
            onClick={() => this.handleShare("discord")}
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="icon t"
            size="lg"
            onClick={() => this.handleShare("twitter")}
          />
          <FontAwesomeIcon
            icon={faPinterest}
            className="icon p"
            size="lg"
            onClick={() => this.handleShare("pinterest")}
          />
          <FontAwesomeIcon
            icon={faFacebook}
            className="icon f"
            size="lg"
            onClick={() => this.handleShare("facebook")}
          />
        </div>
      </div>
    );
  }
}




export default Cart;

