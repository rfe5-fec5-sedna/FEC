import React from "react";
import helperFunction from "./helperFunction.js";
import "./styles/CharNewReview.css";

class CharNewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productMetaData: [],
      didMount: false,
      size: false,
      width: false,
      comfort: false,
      quality: false,
      length: false,
      fit: false
    };
    this.charRadioButtons = this.charRadioButtons.bind(this);
  }

  componentDidMount() {
    helperFunction.getAllMetaReviews(this.props.productId)
      .then((response) => {
        let charObject = response.data.characteristics;
        console.log([charObject]);
        this.setState({
          productMetaData: [charObject],
          didMount: true
        })
        this.charRadioButtons();
      })
      .catch(err => {
        console.log(err)
      })
  }

  charRadioButtons() {
    if (this.state.didMount) {
      let metaData = this.state.productMetaData;
      let productChars = Object.keys(metaData[0]);
      console.log(productChars);
      productChars.forEach((singleChar) => {
        if (singleChar === 'Comfort') {
          this.setState({
            comfort: true
          })
        }
        if (singleChar === 'Fit') {
          this.setState({
            fit: true
          })
        }
        if (singleChar === 'Quality') {
          this.setState({
            quality: true
          })
        }
        if (singleChar === 'Size') {
          this.setState({
            size: true
          })
        }
        if (singleChar === 'Length') {
          this.setState({
            length: true
          })
        }
      })
    }

    const handleTextChange = (e) => {
      console.log(e);
    }

  }

  render() {
    return (
      <div id="characteristics-new-review">
        {this.state.comfort && (
          <div className="characteristics-new-review-selection">
            <div className="characteristics-new-review-title">Comfort</div><br></br>
              <input type="radio" name='comfort'/> Uncomfortable
              <input type="radio" name='comfort'/> Slightly Uncomfortable
              <input type="radio" name='comfort'/> What I Expected
              <input type="radio" name='comfort'/> Comfortable
              <input type="radio" name='comfort'/> Perfect
          </div>
        )}
        {this.state.fit && (
          <div className="characteristics-new-review-selection">
            <div className="characteristics-new-review-title">Fit</div><br></br>
              <input type="radio" name='fit'/> Runs Tight
              <input type="radio" name='fit'/> Runs Slightly Tight
              <input type="radio" name='fit'/> Perfect
              <input type="radio" name='fit'/> Runs Slightly Long
              <input type="radio" name='fit'/> Runs Long
          </div>
        )}
        {this.state.quality && (
          <div className="characteristics-new-review-selection">
            <div className="characteristics-new-review-title">Quality</div><br></br>
              <input type="radio" name='quality'/> Poor
              <input type="radio" name='quality'/> Below Average
              <input type="radio" name='quality'/> What I Expected
              <input type="radio" name='quality'/> Pretty Great
              <input type="radio" name='quality'/> Perfect
          </div>
        )}
        {this.state.size && (
          <div className="characteristics-new-review-selection">
             <div className="characteristics-new-review-title">Size</div><br></br>
              <input type="radio" name='size'/> A Size Too Small
              <input type="radio" name='size'/> 1/2 A Size Too Small
              <input type="radio" name='size'/> Perfect
              <input type="radio" name='size'/> 1/2 A Size Too Big
              <input type="radio" name='size'/> A Size Too Wide
          </div>
        )}
        {this.state.length && (
          <div className="characteristics-new-review-selection">
             <div className="characteristics-new-review-title">Length</div><br></br>
              <input type="radio" name='length'/> Runs Short
              <input type="radio" name='length'/> Runs Slightly Short
              <input type="radio" name='length'/> Perfect
              <input type="radio" name='length'/> Runs Slightly Long
              <input type="radio" name='length'/> Runs Long
          </div>
        )}
      </div>
    );
  }
}

export default CharNewReview;