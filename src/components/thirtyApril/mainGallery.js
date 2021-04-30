import React, { Component } from 'react';
import Masonry from "react-responsive-masonry";
import ImageGallery from './imageGallery';
import VideoGallery from './videoGallery';
import styles from './thirtyApril.module.css';

class MainGallery extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
               
                <Masonry 
                 className={styles.masonryGrid}
                columnsCount={2} gutter="10px" >
                   <VideoGallery />
                   <ImageGallery />
                </Masonry>
            </div>
         );
    }
}
 
export default MainGallery;


