import styles from './thirtyApril.module.css';
import React, { Component } from 'react';
import { BsArrowsFullscreen} from "react-icons/bs";
import { BsDownload} from "react-icons/bs";
import { ImShare } from "react-icons/im";


const ImageAbstract = ({src}) => {
        return ( 
            <div className={styles.imgContainer}>
               <img 
               className={styles.image}
                   src={src}
                   alt="politicians"
               />
                <div className={styles.contentWrapper}>
                            <div className={styles.div1}>
                              <p><span  className={styles.span}>  <BsArrowsFullscreen/></span>Open in full view</p>
                              <p><span  className={styles.span}><BsDownload /></span> Download content</p>
                              <p><span  className={styles.span}><ImShare /></span>Send to Ads manager</p>
                             </div>
                             <div className={styles.div2}>
                               <p className={styles.alignment}> <span className={styles.span}><img className={styles.prof} src="./images/profile.jpg" /></span>Ronald Warren</p>
                            </div>
                 </div>

            </div>
         );
    }

 
export default ImageAbstract;