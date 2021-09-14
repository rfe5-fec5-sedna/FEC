import React from 'react';

class Image_Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPhoto: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    }
  }

  render() {
    return (
      <div className="currentImage-container">
        <div className="image-box1">
          {this.props.currentPhotos.map((currentPhoto, index) => {
            return(
              <img className="image-thumbnail" key={index} src={currentPhoto.thumbnail_url} />
            )
          })}
        </div>
        <div className="image-box2">
         <img className="mainImage" src={this.props.currentPhoto}></img>
        </div>
      </div>
    )
  }
}

export default Image_Gallery;