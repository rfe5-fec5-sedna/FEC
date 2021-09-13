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
      <div>
         <h3>Placeholder for Image</h3>
         <img src={this.state.currentPhoto}></img>
      </div>
    )
  }
}

export default Image_Gallery;