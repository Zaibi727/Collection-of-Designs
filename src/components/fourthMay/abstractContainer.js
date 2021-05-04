import React, { Component } from 'react';
import AbstarctTabItem from './abstractItem';
import styles from './fourtMay.module.css';

class AbstractTabContainer extends Component {
  

    render() { 
        return ( 
            <div className={styles.wrapper}>
                 <nav className={styles.nav}>
                     <ul className={styles.ul}>
                         <li className={styles.li}>
                            <AbstarctTabItem 
                               title='General'
                             />
                         </li>
                         <li className={styles.li}>
                         <AbstarctTabItem 
                              title='Business'
                           />
                         </li>
                         <li className={styles.li}>
                         <AbstarctTabItem 
                                 title='Local'
                                 />
                         </li>
                     </ul>
                 </nav>
      
            </div>
         );
    }
}
 
export default AbstractTabContainer;