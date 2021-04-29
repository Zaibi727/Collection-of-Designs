import styles from './masonry.module.css';
import React, { Component } from 'react';
import Masonry from "react-responsive-masonry";
import MRender from './masonryTitle';


let images = [
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
]






class Mmasonry extends Component {
    render() { 
        return ( 
            <div>
            <Masonry columnsCount={5} gutter= "10px"
              className={styles.masonryGrid}
              columnClassName={styles.columnGrid}
              >
                {images.map((image, i) => (
                      <div className={styles.dddd}>
                      <img
                        className={styles.img}
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                         </div>
                    ))}
            </Masonry>
                
         </div>
         );
    }
}
 
export default Mmasonry;