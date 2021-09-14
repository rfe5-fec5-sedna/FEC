import React from 'react';

class Style extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStyle: 'placeholder'
    }
  }

  // handleClick(value, e) {
  //   console.log('this is value', value);
  //   console.log(e.target)
  // }

  render() {
    return (
      <div className="styleSelector">
        <div>STYLE > {this.state.currentStyle}</div>
        <div className="thumbnail-container">
        {this.props.stylesIn4.map((group, index) => {
          return (
            <div key={index} className="thumbnailRow">
              {group.map((style,index) => {
                const id = style.style_id;
                const currentPhoto = style.photos[0].url;
                const currentPhotos = style.photos;
                return (
                  <img className="thumbnailCircle" key={style.style_id} src={style.photos[0].thumbnail_url} onClick={(e)=> this.props.handleClick(id, currentPhoto, currentPhotos, e)}/>
                )
              })}
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}

export default Style;