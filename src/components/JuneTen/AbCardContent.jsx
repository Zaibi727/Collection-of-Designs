import React from 'react';
import styles from './juneten.module.css';

function AbCardContent(props) {
    const {item} = props;
    return (
        <div className={styles.contentWrapper}>
             <div className={styles.headerdiv}>
                  <p><span>{item.cardHeaderIcon}</span> &nbsp; {item.cardHeaderLabel}</p>
             </div>
    
              <div className={styles.subcontentwrapper}>
                   <div className={styles.AbCardContent}>
                       <span>{item.currencyLabel}</span>
                        <div className={styles.ps}>
                           <p className={styles.p1}>{item.AmountLabel}</p>
                           <p className={styles.p2}>{item.amountPrice}</p>
                       </div>
                  </div>
                  <div className={styles.AbCardContent}>
                       <span>{item.currencyLabel}</span>
                        <div className={styles.ps}>
                           <p className={styles.p1}>{item.RentLabel}</p>
                           <p className={styles.p2}>{item.rentPrice}</p>
                       </div>
                  </div>
                  <div className={styles.AbCardContent}>
                       <span>{item.clockIcon}</span>
                        <div className={styles.ps}>
                           <p className={styles.p1}>{item.durationLabel}</p>
                           <p className={styles.p2}>{item.time}</p>
                       </div>
                  </div>
           </div>
        </div>   
    )
}

export default AbCardContent;
