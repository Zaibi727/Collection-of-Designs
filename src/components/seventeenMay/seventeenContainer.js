import React, { Component } from 'react';
import styles from './seventeen.module.css';


class SeventeenContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.wrapper}>
            <div className={styles.SeventeenContainer}>
                <section className={styles.sec1}>
                    <img src="./images/profile.jpg" />
                    <p>Steve&nbsp;Robbon</p>
                </section>
                <section className={styles.sec2}>
                    <p className={styles.heading}>CEO'S Message</p>
                    <p className={styles.descrp}>
                       In addition to this, I have the ability to adapt to any type of team environment, I am team oriented and get along with others when working in a group setting. I also have the ability to work independently while staying on schedule and meeting those tight deadlines.
                    </p>
                </section>
            </div>
            </div>
         );
    }
}
 
export default SeventeenContainer;