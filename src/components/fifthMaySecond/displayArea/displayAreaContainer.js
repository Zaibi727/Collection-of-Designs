import React, { Component } from 'react';
import styles from './displayArea.module.css';
import  FirstHeader from './displayFirstHeader';
import DispalySecondHeader from './dispalySecondHeader';


class DisplayAreaContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.displayAreaWrapper}>
                 <FirstHeader />
                 <DispalySecondHeader />
            </div>
         );
    }
}
 
export default DisplayAreaContainer;