import React from 'react';
import helperFunction from './helperFunction.js';
import './styles/ProductBreakdown.css';
import Rating from 'react-rating';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

class ProductBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comfort: '',
      fit: '',
      length: '',
      quality: ''
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.productId !== prevProps.productId) {
      helperFunction.getAllMetaReviews(this.props.productId)
        .then((response) => {
          let charObject = response.data.characteristics;
          console.log(charObject);
          this.setState({
            comfort: helperFunction.productValueRound(charObject.Comfort.value),
            fit: helperFunction.productValueRound(charObject.Fit.value),
            length: helperFunction.productValueRound(charObject.Length.value),
            quality: helperFunction.productValueRound(charObject.Quality.value),
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  render() {
    let caretUp = <FontAwesomeIcon icon={faCaretUp} />;
    return (
      <div className="ratings-characteristics">
        Comfort
        <BarGraphStyling>
          <BarShading shade={this.state.comfort}></BarShading>{caretUp}
          <BarDarkShading darkShade={this.state.comfort}></BarDarkShading>
        </BarGraphStyling>
        <div className="characteristics-container">
          <div className="characteristics-left-short">Poor</div>
          <div className="characteristics-right">Perfect</div>
        </div><br></br>
        Fit
        <BarGraphStyling>
          <BarShading shade={this.state.fit}></BarShading>{caretUp}
          <BarDarkShading darkShade={this.state.fit}></BarDarkShading>
        </BarGraphStyling>
        <div className="characteristics-container">
          <div className="characteristics-left">Too Tight</div>
          <div className="characteristics-middle">Perfect</div>
          <div className="characteristics-right">Too Loose</div>
        </div><br></br>
        Length
        <BarGraphStyling>
          <BarShading shade={this.state.length}></BarShading>{caretUp}
          <BarDarkShading darkShade={this.state.length}></BarDarkShading>
        </BarGraphStyling>
        <div className="characteristics-container">
          <div className="characteristics-left">Too Small</div>
          <div className="characteristics-middle">Perfect</div>
          <div className="characteristics-right">Too Big</div>
        </div><br></br>
        Quality
        <BarGraphStyling>
          <BarShading shade={this.state.quality}></BarShading>{caretUp}
          <BarDarkShading darkShade={this.state.quality}></BarDarkShading>
        </BarGraphStyling>
        <div className="characteristics-container">
          <div className="characteristics-left-short">Poor</div>
          <div className="characteristics-right">Great</div>
        </div>
      </div>
    );
  }
}

// Bar Styled Components
const BarGraphStyling = styled.div`
  width: 300px;
  display: flex;
  height: 8px;
`;

const BarShading = styled.div`
  background: lightgray;
  width: ${props => props.shade}%;
  color: lightgray;
  margin-left: 10px;
  font-size: 1px;
`;

const BarDarkShading = styled.div`
  background: lightgray;
  width: ${props => 100 - props.darkShade}%;
  color: grey;
  margin-right: 25px;
  font-size: 1px;
`;

export default ProductBreakdown;