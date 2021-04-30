import React, { Component } from 'react';
import MediaPlayer from './reactPlayer';
import styles from './thirtyApril.module.css';

class MainPlayer extends Component {
    state = { 
        Rows: [
            {id: 1},
            {id: 2},
            {id: 3},
            {id: 4},
            {id: 5}, 
            {id: 6},
            {id: 7},
            {id: 8},
            {id: 9}, 
            {id: 10},
            {id: 11},
            {id: 12}, 
            {id: 13},
            {id: 14}, 
            {id: 15},
            {id: 16},
            {id: 17}, 
        ],
     }
    render() { 
        return ( 
            <div>
             <div className={styles.oy}>
                {this.state.Rows.map(r =>
                    <MediaPlayer 
                        key={r.id}
                    />
                )}
             </div>
               
            </div>
         );
    }
}
 


export default MainPlayer;