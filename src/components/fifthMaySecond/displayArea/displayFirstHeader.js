import React, { Component } from 'react';
import styles from './displayArea.module.css';
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";


class FirstHeader extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.firstHeaderWrapper}>
                   <section className={styles.firstFlex}>
                       <p className={styles.settingHead}>Settings</p>
                       <div className={styles.btnFlex}>
                           <button className={styles.settingBtn1}><AiOutlineMessage /></button>
                           <button className={styles.settingBtn2}><AiOutlineBell /></button>
                       </div>

                   </section>

                       <ul className={styles.secondFlex}>
                           <li><a>Platform settings</a></li>
                           <li><a>Manage team</a></li>
                       </ul>

            </div>

         );
    }
}
 
export default FirstHeader;