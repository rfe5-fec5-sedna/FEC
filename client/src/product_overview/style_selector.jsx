import React from 'react';

class Style extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    console.log('prev', prevProps)
    if(this.props.styles !== prevProps.styles) {
      this.setState ({
        selected: this.props.styles[0].style_id
      })
    }
  }

  handleChange(e) {
    this.setState({
      selected: Number(e.target.id)
    })
  }

  render() {
    return (
      <div className="styleSelector">
        <div className="styleName">STYLE > {this.props.styleName}</div>
        <div className="thumbnail-container">
          {this.props.stylesIn4.map((group, index) => {
            return (
              <div key={index} className="thumbnailRow">
                {group.map((style, index) => {
                  const product = {
                    style_id: style.style_id,
                    name: style.name,
                    currentPhoto: style.photos[0].url,
                    currentPhotos: style.photos,
                    price: [style.original_price, style.sale_price],
                    currentSkus: style.skus,
                  };
                  return (
                    <div key={style.style_id}>
                      <input
                        type="radio"
                        name="checkbox"
                        key={style.style_id}
                        id={style.style_id}
                        checked={style.style_id === this.state.selected}
                        onChange={this.handleChange}
                      />
                      <label
                        htmlFor={style.style_id}
                        onClick={(e) => this.props.handleClick(product, e)}
                      >
                        <img
                          className="thumbnailCircle"
                          key={style.style_id}
                          src={style.photos[0].thumbnail_url}
                        />
                      </label>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Style;




// const Style = (props) => (

//   <div className="styleSelector">
//     <div className="styleName">STYLE > {props.styleName}</div>
//       <div className="thumbnail-container">
//         {props.stylesIn4.map((group, index) => {
//           return (
//             <div key={index} className="thumbnailRow">
//               {group.map((style,index) => {
//                 const product = {
//                   style_id:style.style_id,
//                   name: style.name,
//                   currentPhoto: style.photos[0].url,
//                   currentPhotos: style.photos,
//                   price: [style.original_price, style.sale_price],
//                   currentSkus: style.skus
//                 }
//                 return (
//                   <div key={style.style_id}>
//                   <input type="radio" name="checkbox" key={style.style_id} id={style.style_id}/>
//                   <label htmlFor={style.style_id} onClick={(e)=> props.handleClick(product, e)}>
//                   <img className="thumbnailCircle" key={style.style_id} src={style.photos[0].thumbnail_url} />
//                   </label>
//                   </div>
//                 )
//               })}
//             </div>
//           )
//         })}
//       </div>
//    </div>
// )


