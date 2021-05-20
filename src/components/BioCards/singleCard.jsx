import React, { Component } from 'react';
import styles from './bioCards.module.css';

class SingleCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.wrapper}>
                <section className={styles.secWrapper}>
                    <img className={styles.img} src="./images/profile.jpg"/>
                    <p className={styles.name}>Sunlimetech</p>
                    <p className={styles.discrip}>
                        Thi is basic card with image on top, title,<br />
                        description and button. 
                    </p>
                    <button className={styles.btn}>
                        +
                    </button>
                </section>
            </div>
         );
    }
}
 
export default SingleCard;