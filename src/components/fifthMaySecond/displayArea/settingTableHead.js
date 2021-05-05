import React, { Component } from 'react';
import styles from './displayArea.module.css';


class SettingTableHead extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                    <table className={styles.headTable}>
                    <tr className={styles.headRow}>
                         <th className={styles.user}>
                             USER
                         </th>
                         <th className={styles.contact}>
                             Contact
                         </th>
                         <th className={styles.role}>
                             Role
                         </th>
                         <th className={styles.status}>
                             STATUS
                         </th>
                         <th>
                             CLEARANCES
                         </th>
                     </tr>
                    </table>
            </div>

         );
    }
}
 
export default SettingTableHead;