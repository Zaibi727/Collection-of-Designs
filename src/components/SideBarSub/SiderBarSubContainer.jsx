import React from 'react';
import SideNav from './SideNav';
import HeaderNav from './HeaderNav';
import styles from './sidebarsub.module.css';

export default function SiderBarSubContainer() {
    return (
        <div className={styles.conatiner}>
            <div>
                
                <SideNav />
            </div>
            <div>
               <HeaderNav />
            </div>

        </div>
    )
}
