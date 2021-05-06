import React from 'react';
import styles from './sixMayCard.module.css';


 const AbstractSingleCard = (props) => {
    const {src, name, address,Icon1,followers,Icon2,actions, style, onClick} = {...props };
  return (
    
            <div className={styles.abstractWrapper} onClick={onClick}>
                 <div className={styles.abstarctDiv1} style={style} >
                     <img className={styles.abstarctImg} src={src} />
                 </div>

                 <div className={styles.abstarctDiv2} style={style} >
                   <p className={styles.name}>{name}</p>
                   <p className={styles.adress}>{address}</p>
                 </div>

                 <div className={styles.abstarctDiv3} style={style} >
                     <div>
                         <span className={styles.icon1}>{ Icon1 ? <Icon1/>: {Icon1} }</span>
                         <span className={styles.follower}>{followers}</span>
                     </div>
                     <div>
                         <span className={styles.icon2}>{ Icon2 ? <Icon2/>: {Icon2} }</span>
                         <span className={styles.action}>{actions}</span>
                     </div>
                 </div>

          </div>      
  )  
};

export default  AbstractSingleCard ;