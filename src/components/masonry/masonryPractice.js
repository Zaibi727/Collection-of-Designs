import styles from './masonry.module.css';
import React, { Component } from 'react';
import Masonry from "react-responsive-masonry";
import Mrender from './masonryTitle';


let images = [
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",
]






class Mmasonry extends Component {
    render() { 
        return ( 
            <div>
            <Masonry columnsCount={5} gutter= "10px"
              className={styles.masonryGrid}
              columnClassName={styles.columnGrid}
              >
                {images.map((image) => {
                  return (
                    <Mrender 
                      src={image}
                     />
                  )
                })}

            </Masonry>
                
         </div>
         );
    }
}
 
export default Mmasonry;