import React, { Component } from 'react';
import styles from './displayArea.module.css';
import SettingTable from './settingTable';

class DispalySecondHeader extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <section className={styles.secondHeadeDiv1}>
                        <p className={styles.secondHeaderP1}>Colleagues<span>(5)</span></p>
                        <button className={styles.secondHeaderBtn}>Invite new</button>
                </section>
                <div>
                <SettingTable />
                </div>
            </div>
         );
    }
}
 
export default DispalySecondHeader;