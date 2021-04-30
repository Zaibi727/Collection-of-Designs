import React, { Component } from 'react';
//import Masonry from "react-responsive-masonry";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import VideoAbstract from './videoAbstract';

class VideoGallery extends Component {
    render() { 
        return ( 
            <div>
             <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 2}}
            >
              <Masonry gutter="10px">
                {src.map((src, i) => {
                  return (
                    <VideoAbstract 
                      src={src.video}
                      key={i}
                     />
                  )
                })}
              </Masonry>
              </ResponsiveMasonry>
               
            </div>
         );
    }
}
 
export default VideoGallery;

let src = [
    {video: './video/video1.mp4'},
    {video: './video/video2.mp4'},
    {video: './video/video3.mp4'},
    {video: './video/video4.mp4'},
    {video: './video/video5.mp4'},
    {video: './video/video6.mp4'},
]