import React, { Component } from 'react';
import MasonryPlayer from './reactMasplayer';
import styles from './masonry.module.css';

class Video extends Component {
    state = { 
        Rows: [
            {id: 1},
           
        ],
     }
    render() { 
        return ( 
            <div>
             <div className={styles.oy}>
                {this.state.Rows.map(r =>
                    <MasonryPlayer 
                        key={r.id}
                    />
                )}
             </div>
               
            </div>
         );
    }
}
 


export default Video;