import React from 'react';

class Image_Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainIndex: 0,
      expanded: false,
    };

    this.handleForward = this.handleForward.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleForward(e) {
    e.preventDefault();
    const i = this.state.mainIndex + 1;

    if (i < this.props.currentPhotos.length) {
      this.setState({
        mainIndex: i,
      });
    } else {
      this.setState({
        mainIndex: 0,
      });
    }
  }

  handleBack(e) {
    e.preventDefault();
    const i = this.state.mainIndex - 1;

    if (i > -1) {
      this.setState({
        mainIndex: i,
      });
    } else {
      this.setState({
        mainIndex: 0,
      });
    }
  }

  handleClick(e, i) {
    e.preventDefault();
    this.setState({
      mainIndex: i,
    });
  }

  render() {
    return (
      <div className="currentImage-container">
        <div className="image-box1">
          {this.props.currentPhotos.length !== 0 &&
            this.props.currentPhotos.map((currentPhoto, index) => {
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
        </div>
        <div className="image-box2">
          {this.state.mainIndex !== 0 && (
            <a className="back" onClick={this.handleBack}>
              &#10094;
            </a>
          )}
          {this.state.mainIndex !== this.props.currentPhotos.length - 1 && (
            <a className="forward" onClick={this.handleForward}>
              &#10095;
            </a>
          )}
          {this.props.currentPhotos[0] !== undefined && (
            <img
              className="mainImage"
              src={this.props.currentPhotos[this.state.mainIndex].url}
              onClick={() => this.setState({ expanded: !this.state.expanded })}
            ></img>
          )}
          {this.state.expanded && (
            <dialog open>
              {this.state.mainIndex !== 0 && (
                <a className="zoomBack" onClick={this.handleBack}>
                  &#10094;
                </a>
              )}
              <img
                className="expanded"
                src={this.props.currentPhotos[this.state.mainIndex].url}
                onClick={() =>
                  this.setState({ expanded: !this.state.expanded })
                }
              ></img>
              {this.state.mainIndex !== this.props.currentPhotos.length - 1 && (
                <a className="zoomForward" onClick={this.handleForward}>
                  &#10095;
                </a>
              )}
            </dialog>
          )}
        </div>
      </div>
    );
  }
}

export default Image_Gallery;