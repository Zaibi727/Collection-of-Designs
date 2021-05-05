import React, { Component } from 'react';
import styles from './screen.module.css';



class ScreenStructure extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.screenWrapper}>
                <section className={styles.sideBar}></section>
                <section className={styles.sideNavBar}></section>
                <section className={styles.displayArea}>
                    <div className={styles.topHeader}></div>
                    <div className={styles.table}></div>
                </section>
            </div>
         );
    }
}
 
export default ScreenStructure;