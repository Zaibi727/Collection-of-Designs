import React, { Component } from 'react';
import ButtonMayAbstract from './buttonMayAbstract';
import { FiUsers } from "react-icons/fi";
import styles from './inputRange.module.css';


class ButtonMay extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.wholeWraper}>
            <div className={styles.buttonWrapper}>
               <div>
                    <ButtonMayAbstract
                       Icon= { FiUsers }
                    />
               </div>
               <div className={styles.div2}>
                   <p className={styles.p1}>1.256</p>
                   <p className={styles.p2}>Talents</p>
               </div>
            </div>
            </div>

         );
    }
}
 
export default ButtonMay;