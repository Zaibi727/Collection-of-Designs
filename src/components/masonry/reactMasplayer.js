import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import styles from './masonry.module.css';
import { BsArrowsFullscreen} from "react-icons/bs";
import { BsDownload} from "react-icons/bs";
import { ImShare } from "react-icons/im";


class MasonryPlayer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.MrenderVideo}>
                 <ReactPlayer 
                     className={styles.video}
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    muted= {false}    
                    playing= {false}
                    controls={true}         
                  />
                       <div className={styles.contentWrapperVideo}>
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
}
 
export default MasonryPlayer;