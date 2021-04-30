import React, { Component } from 'react';
//import Masonry from "react-responsive-masonry";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import ImageAbstract from './imageAbstract';

class ImageGallery extends Component {
    render() { 
        return ( 
            <div>
             <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 2}}
            >
            <Masonry gutter="10px">
            {src.map((src, i) => {
                  return (
                    <ImageAbstract 
                      src={src.image}
                     />
                  )
                })}
            </Masonry>
            </ResponsiveMasonry>
            </div>
         );
    }
}
 
export default ImageGallery;

let src = [
    {image: './images/image6.jpg'},
    {image: './images/image2.jpg'},
    {image: './images/image3.jpg'},
    {image: './images/image4.jpg'},
    {image: './images/image5.jpg'},
    {image: './images/image6.jpg'},
    {image: './images/image7.jpg'},
    {image: './images/image8.jpg'},
    {image: './images/image9.jpg'},
    {image: './images/image10.jpg'},
    {image: './images/image11.jpg'},
    {image: './images/image12.jpg'},
    {image: './images/image13.jpg'},
    {image: './images/image14.jpg'},
]