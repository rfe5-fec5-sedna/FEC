import React from "react";
import helperFunction from "./helperFunction.js";
// import "./styles/CharNewReview.css";

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
  }

  render() {
    return (
      <div id="characteristics-new-review" onChange={this.props.handleCharChange}>
        {(this.state.comfort && this.state.didMount) && (
          <div className="characteristics-new-review-selection">
            <div className="characteristics-new-review-title">Comfort</div><br></br>
              <input type="radio" name={this.state.productMetaData[0].Comfort.id} value="1" /> Uncomfortable
              <input type="radio" name={this.state.productMetaData[0].Comfort.id} value="2"/> Slightly Uncomfortable
              <input type="radio" name={this.state.productMetaData[0].Comfort.id} value="3"/> What I Expected
              <input type="radio" name={this.state.productMetaData[0].Comfort.id} value="4"/> Comfortable
              <input type="radio" name={this.state.productMetaData[0].Comfort.id} value="5"/> Perfect
          </div>
        )}
        {(this.state.fit && this.state.didMount) && (
          <div className="characteristics-new-review-selection">
            <div className="characteristics-new-review-title">Fit</div><br></br>
              <input type="radio" name={this.state.productMetaData[0].Fit.id} value="1" /> Runs Tight
              <input type="radio" name={this.state.productMetaData[0].Fit.id} value="2" /> Runs Slightly Tight
              <input type="radio" name={this.state.productMetaData[0].Fit.id} value="3" /> Perfect
              <input type="radio" name={this.state.productMetaData[0].Fit.id} value="4" /> Runs Slightly Long
              <input type="radio" name={this.state.productMetaData[0].Fit.id} value="5" /> Runs Long
          </div>
        )}
        {(this.state.quality && this.state.didMount) && (
          <div className="characteristics-new-review-selection">
            <div className="characteristics-new-review-title">Quality</div><br></br>
              <input type="radio" name={this.state.productMetaData[0].Quality.id} value="1" /> Poor
              <input type="radio" name={this.state.productMetaData[0].Quality.id} value="2"/> Below Average
              <input type="radio" name={this.state.productMetaData[0].Quality.id} value="3"/> What I Expected
              <input type="radio" name={this.state.productMetaData[0].Quality.id} value="4"/> Pretty Great
              <input type="radio" name={this.state.productMetaData[0].Quality.id} value="5"/> Perfect
          </div>
        )}
        {(this.state.size && this.state.didMount) && (
          <div className="characteristics-new-review-selection">
             <div className="characteristics-new-review-title">Size</div><br></br>
              <input type="radio" name={this.state.productMetaData[0].Size.id} value="1" /> A Size Too Small
              <input type="radio" name={this.state.productMetaData[0].Size.id} value="2" /> 1/2 A Size Too Small
              <input type="radio" name={this.state.productMetaData[0].Size.id} value="3" /> Perfect
              <input type="radio" name={this.state.productMetaData[0].Size.id} value="4" /> 1/2 A Size Too Big
              <input type="radio" name={this.state.productMetaData[0].Size.id} value="5" /> A Size Too Wide
          </div>
        )}
        {(this.state.length && this.state.didMount) && (
          <div className="characteristics-new-review-selection">
             <div className="characteristics-new-review-title">Length</div><br></br>
              <input type="radio" name={this.state.productMetaData[0].Length.id} value="1" /> Runs Short
              <input type="radio" name={this.state.productMetaData[0].Length.id} value="2" /> Runs Slightly Short
              <input type="radio" name={this.state.productMetaData[0].Length.id} value="3" /> Perfect
              <input type="radio" name={this.state.productMetaData[0].Length.id} value="4" /> Runs Slightly Long
              <input type="radio" name={this.state.productMetaData[0].Length.id} value="5" /> Runs Long
          </div>
        )}
      </div>
    );
  }
}

export default CharNewReview;