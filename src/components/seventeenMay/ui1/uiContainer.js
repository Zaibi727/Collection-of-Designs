import React, { Component } from 'react';
import ButtonAb from './buttonAb';
import styles from './ui.module.css';

class UiContainter extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.wrapper}>
                <p className={styles.head}>
                    Let's Do Business
                </p>
                <p className={styles.p}>
                        Our offering also includes Shopping malls and cinemas, as well as the Pakistan's<br/>
                        largest network of buses in major towns and cities across the Pakistan
                </p>
                <div>
                  <ButtonAb 
                      title="Investment Opportunities"
                  />
                </div>
            </div>
         );
    }
}
 
export default UiContainter;