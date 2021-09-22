import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// import { GlassMagnifier } from "react-image-magnifiers";
import Magnifier from "react-magnifier";

class Image_Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainIndex: 0,
      mainUrl: '',
      firstUrl: '',
      lastUrl: '',
      expanded: false,
      zoom: false,
      currentPhotos: [],
      style: {}
    };

    this.handleForward = this.handleForward.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.handleUp = this.handleUp.bind(this);
    this.handleZoom = this.handleZoom.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  componentDidUpdate(prevProps) {
    if(this.props.currentPhoto !== prevProps.currentPhoto) {
      const length = this.props.currentPhotos.length;
      this.setState ({
       currentPhotos: this.props.currentPhotos,
       mainUrl: this.props.currentPhotos[0].url,
       firstUrl: this.props.currentPhotos[0].url,
       lastUrl: this.props.currentPhotos[length - 1].url
      })
    } else if(this.props.currentPhotos !== prevProps.currentPhotos) {
      const length = this.props.currentPhotos.length;
      this.setState ({
       currentPhotos: this.props.currentPhotos,
       mainUrl: this.props.currentPhotos[this.state.mainIndex].url,
       firstUrl: this.props.currentPhotos[0].url,
       lastUrl: this.props.currentPhotos[length - 1].url
      })
    }
  }

  handleForward(e) {
    e.preventDefault();
    let i = this.state.mainIndex + 1;

    if (i < this.props.currentPhotos.length) {
      if(i > 4) {
        const thumbnailReorder = this.state.currentPhotos.slice();
        const first = thumbnailReorder.shift();
        thumbnailReorder.push(first);
        const url = thumbnailReorder[i - 1].url;
        this.setState({
          mainIndex: i - 1,
          currentPhotos: thumbnailReorder,
          mainUrl: url
        })
      } else {
        const url = this.state.currentPhotos[i].url;
        this.setState({
          mainIndex: i,
          mainUrl: url
        });
      }
    }
  }

  handleBack(e) {
    e.preventDefault();
    let i = this.state.mainIndex - 1;

    if (i > -1) {
      if(i === 0) {
        const thumbnailReorder = this.state.currentPhotos.slice();
        const last = thumbnailReorder.pop();
        thumbnailReorder.unshift(last);
        const url = thumbnailReorder[i].url;
        this.setState({
          mainIndex: i,
          currentPhotos: thumbnailReorder,
          mainUrl: url
        })
      } else {
        const url = this.state.currentPhotos[i].url;
        this.setState({
          mainIndex: i,
          mainUrl: url
        });
      }
    }
  }

  handleClick(e, i) {
    e.preventDefault();
    const url = this.state.currentPhotos[i].url;
    this.setState({
      mainIndex: i,
      mainUrl: url
    });
  }

  handleDown (e) {
    e.preventDefault();
    const i = this.state.mainIndex;
    const thumbnailReorder = this.state.currentPhotos.slice();
    const first = thumbnailReorder.shift();
    thumbnailReorder.push(first);
    const url = thumbnailReorder[i].url;
    this.setState({
      currentPhotos: thumbnailReorder,
      mainUrl: url
    })
  }

  handleUp (e) {
    e.preventDefault();
    const i = this.state.mainIndex;
    const thumbnailReorder = this.state.currentPhotos.slice();
    const last = thumbnailReorder.pop();
    thumbnailReorder.unshift(last);
    const url = thumbnailReorder[i].url;
    this.setState({
      currentPhotos: thumbnailReorder,
      mainUrl: url
    })
  }

  handleZoom(e) {
    e.preventDefault();
    this.setState({
      zoom: !this.state.zoom
    })
  }

  handleHover(e) {

    const x = - (e.pageX - e.target.offsetLeft - e.target.clientLeft) * 2;
    const y = - (e.pageY - e.target.offsetTop - e.target.clientTop) * 2;
    this.setState({
      style: {
        left: x,
        top: y
      }
    })
  }




  render() {
    return (
      <div className="currentImage-container">
        <div className="image-box1">
          <a className="up" onClick={this.handleUp}>
            &#710;
          </a>
          {this.state.currentPhotos.length !== 0 &&
            this.state.currentPhotos.map((currentPhoto, index) => {
              return (
                <img
                  className="image-thumbnail"
                  id={
                    index === this.state.mainIndex
                      ? "selectedPic"
                      : "notSelected"
                  }
                  key={index}
                  src={currentPhoto.thumbnail_url}
                  onClick={(e) => this.handleClick(e, index)}
                />
              );
            })}
          <a className="down" onClick={this.handleDown}>
            &#711;
          </a>
        </div>
        <div className="image-box2">
          {this.state.mainUrl !== this.state.firstUrl && (
            <div className="back" onClick={this.handleBack}>
              &#10094;
            </div>
          )}
          {this.state.currentPhotos[0] !== undefined && (
            <img
              className="mainImage"
              src={this.state.mainUrl}
              onClick={() => this.setState({ expanded: !this.state.expanded })}
            ></img>
          )}
          {this.state.mainUrl !== this.state.lastUrl && (
            <div className="forward" onClick={this.handleForward}>
              &#10095;
            </div>
          )}
          {this.state.expanded && (
            <dialog open>
              <div className="zoomContainer">
                <div className="searchPlus">
                  <FontAwesomeIcon
                    icon={faSearchPlus}
                    size="2x"
                    onClick={() =>
                      this.setState({ expanded: !this.state.expanded })
                    }
                  />
                </div>
                <div className="afterZoomContainer">
                  {this.state.zoom && (
                    <img
                      id="afterZoom"
                      src={this.state.currentPhotos[this.state.mainIndex].url}
                      style={this.state.style}
                    />
                  )}
                </div>
                <div className="iconRow">
                  {this.state.currentPhotos.length !== 0 &&
                    this.state.currentPhotos.map((currentPhoto, index) => {
                      return (
                        <img
                          className="image-icon"
                          id={
                            index === this.state.mainIndex
                              ? "selectedPic"
                              : "notSelected"
                          }
                          key={index}
                          src={currentPhoto.thumbnail_url}
                          onClick={(e) => this.handleClick(e, index)}
                        />
                      );
                    })}
                </div>
                <div
                  className="beforeZoomContainer"
                  onMouseMove={this.handleHover}
                >
                  <img id={this.state.zoom ? "minus" : ""}
                    src={this.state.currentPhotos[this.state.mainIndex].url}
                    onClick={this.handleZoom}
                  />
                </div>
                <div>
                  <a className="zoomBack" onClick={this.handleBack}>
                    &#10094;
                  </a>
                  <a className="zoomForward" onClick={this.handleForward}>
                    &#10095;
                  </a>
                </div>
              </div>
            </dialog>
          )}
        </div>
      </div>
    );
  }
}

export default Image_Gallery;