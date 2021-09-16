import React from 'react';

const Style = (props) => (

  <div className="styleSelector">
    <div className="styleName">STYLE > {props.styleName}</div>
      <div className="thumbnail-container">
        {props.stylesIn4.map((group, index) => {
          return (
            <div key={index} className="thumbnailRow">
              {group.map((style,index) => {
                const product = {
                  style_id:style.style_id,
                  name: style.name,
                  currentPhoto: style.photos[0].url,
                  currentPhotos: style.photos,
                  price: [style.original_price, style.sale_price],
                  currentSkus: style.skus
                }
                return (
                  <img className="thumbnailCircle" key={style.style_id} src={style.photos[0].thumbnail_url} onClick={(e)=> props.handleClick(product, e)}/>
                )
              })}
            </div>
          )
        })}
      </div>
   </div>
)

export default Style;

// class Style extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       currentStyle: 'placeholder'
//     }
//   }

//   render() {
//     return (
//       <div className="styleSelector">
//         <div>STYLE > {this.props.styleName}</div>
//         <div className="thumbnail-container">
//         {this.props.stylesIn4.map((group, index) => {
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
//                   <img className="thumbnailCircle" key={style.style_id} src={style.photos[0].thumbnail_url} onClick={(e)=> this.props.handleClick(product, e)}/>
//                 )
//               })}
//             </div>
//           )
//         })}
//         </div>
//       </div>
//     )
//   }
// }

