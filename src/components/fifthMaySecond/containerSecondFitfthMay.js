import React, { Component } from 'react';
import LeftHeader from './leftHeader/leftHeader';
import AdminPanel from './adminPanel/adminPanelNav';
import DisplayAreaContainer from './displayArea/displayAreaContainer';
import styles from './secondFifthMay.module.css';


class Secondififth extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.containerWrapper}>
                <LeftHeader />
                <AdminPanel />
                <DisplayAreaContainer />
            </div>
         );
    }
}
 
export default Secondififth;