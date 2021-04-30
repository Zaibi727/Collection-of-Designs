import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import styles from './thirtyApril.module.css';

class MediaPlayer extends Component {
  

    render() { 
        return ( 
            <div className={styles.wrapper}>
                <ReactPlayer 
                    className={styles.player}
                    url={[
                           'https://www.youtube.com/watch?v=oUFJJNQGwhk',
                            'https://www.youtube.com/watch?v=jNgP6d9HraI'
                      ]}
                    muted= {false}
                    playing= {false}
                    controls={true}
                    loop={false}
                    light={false}
                    

                    
                  />
            </div>
         );
    }
}
 
export default MediaPlayer;