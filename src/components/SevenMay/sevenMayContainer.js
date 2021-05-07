import React, { Component } from 'react';
import EnglishRender from './sevenEnglish/englishRender';
import EuroRender from './sevenEuro/euroRender';
import KilometerRender from './sevenKilometer/kilometerRender'
import TimeRender from './sevenTime/timeRender';
import styles from './sevenMay.module.css';


class SevenMayContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.sevenMayWrapper}>
                <h3>System settings</h3>
                <div className={styles.div1}><EnglishRender /></div>
                <div className={styles.div2}><EuroRender /></div>
                <div className={styles.div3}><KilometerRender /></div>
                <div><TimeRender /></div>
            </div>
         );
    }
}
 
export default SevenMayContainer;