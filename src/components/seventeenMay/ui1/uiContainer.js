import React, { Component } from 'react';
import ButtonAb from './buttonAb';
import styles from './ui.module.css';

class UiContainter extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.wrapper}>
                <h1>
                    Let's Do Business
                </h1>
                <p>
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