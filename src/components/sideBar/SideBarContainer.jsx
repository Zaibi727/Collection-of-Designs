import React from 'react';
import TopNav from './TopNav';
import SideNav from './SideNav';
import styles from './sideBar.module.css';





export default function SideBarContainer() {
    return (
        <div className={styles.container}>
           <section className={styles.structure}>
               <div className={styles.a}>
                     <SideNav />
               </div>
               <div className={styles.b}>
                   <TopNav />
               </div>
           </section>

        </div>
    )
}

