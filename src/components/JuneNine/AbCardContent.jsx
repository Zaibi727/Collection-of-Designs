import React from 'react';
import styles from './junenine.module.css';

function AbCardContent(props) {
    const {c} = props;
    return (
        <div className={styles.contentWrapper}>
             <div className={styles.headerdiv}>
                  <p><span>{c.Icon1}</span> &nbsp; {c.label1}</p>
             </div>
    
              <div className={styles.subcontentwrapper}>
                   <div className={styles.AbCardContent}>
                       <span>{c.Icon2}</span>
                        <div className={styles.ps}>
                           <p className={styles.p1}>{c.label2}</p>
                           <p className={styles.p2}>{c.price1}</p>
                       </div>
                  </div>
                  <div className={styles.AbCardContent}>
                       <span>{c.Icon2}</span>
                        <div className={styles.ps}>
                           <p className={styles.p1}>{c.label3}</p>
                           <p className={styles.p2}>{c.price2}</p>
                       </div>
                  </div>
                  <div className={styles.AbCardContent}>
                       <span>{c.Icon3}</span>
                        <div className={styles.ps}>
                           <p className={styles.p1}>{c.label4}</p>
                           <p className={styles.p2}>{c.time}</p>
                       </div>
                  </div>
             </div>
        </div>
    )
}

export default AbCardContent;
