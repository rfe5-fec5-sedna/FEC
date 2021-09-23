import React from "react";
import helperFunction from "./helperFunction.js";
import "./styles/CharNewReview.css";

class CharNewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '',
      width: '',
      comfort: '',
      quality: '',
      length: '',
      fit: ''
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  characteristicRubric = {
    Size: {
      1: 'A Size Too Small',
      2: '1/2 A Size Too Small',
      3: 'Perfect',
      4: '1/2 A Size Too Big',
      5: 'A Size Too Wide',
    },
    Width: {
      1: 'Too Narrow',
      2: 'Slightly Narrow',
      3: 'Perfect',
      4: 'Slightly Wide',
      5: 'Too Wide',
    },
    Comfort: {
      1: 'Uncomfortable',
      2: 'Slightly Uncomfortable',
      3: 'Ok',
      4: 'Comfortable',
      5: 'Perfect',
    },
    Quality: {
      1: 'Poor',
      2: 'Below Average',
      3: 'What I Expected',
      4: 'Pretty Great',
      5: 'Perfect',
    },
    Length: {
      1: 'Runs Short',
      2: 'Runs Slightly Short',
      3: 'Perfect',
      4: 'Runs Slightly Long',
      5: 'Runs Long',
    },
    Fit: {
      1: 'Runs Tight',
      2: 'Runs Slightly Tight',
      3: 'Perfect',
      4: 'Runs Slightly Long',
      5: 'Runs Long',
    }
  }


  render() {
    return (
      <div id="characteristics-new-review">
        <div id="characteristics-new-review-title">

        </div>
        <div className="characteristics-new-review-selection">

        </div>

      </div>
    );
  }
}

  export default CharNewReview;