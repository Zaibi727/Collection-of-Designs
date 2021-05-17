import React, { Component } from 'react';
import styles from './billboard.module.css';


class BillBoard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.wrapperDouble}>
            <div className={styles.billWrapper}>
                <section className={styles.sec1}>
                    <img src="./images/billboard.png" />
                </section>
                <section className={styles.sec2}>
                    <p className={styles.p1}>60 X 20 Billboard</p>
                    <p className={styles.p2}>
                    In addition to this, I have the ability to adapt to any type of team environment, I am team oriented and get along with others when working in a group setting. I also have the ability to work independently while staying on schedule and meeting those tight deadlines.
                    </p>
                </section>
            </div>

            <div id={styles.secondPortion}>   
                <section id={styles.secondMargin} className={styles.sec2}>
                    <p className={styles.p1}>45 X 15 Billboard</p>
                    <p className={styles.p2}>
                    In addition to this, I have the ability to adapt to any type of team environment, I am team oriented and get along with others when working in a group setting. I also have the ability to work independently while staying on schedule and meeting those tight deadlines.
                    </p>
                </section>
                <section id={styles.Sec1OfSecond}>
                    <img src="./images/billboard.png" />
                </section>
            </div>
            </div>
         );
    }
}
 
export default BillBoard;