import React,{useState} from 'react';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import styles from './sidebarsub.module.css';

import {GiCoffeeCup} from "react-icons/gi";
import {FaRegUser} from "react-icons/fa";
import {AiFillSetting} from "react-icons/ai";



export default function SideNav () {
    return (
        <div className={styles.sidenav}>

            <div className={styles.div1}>
                <h4>React-minimal-side-navigation</h4>
            </div>

           <div className={styles.div2}>
           <Navigation
            items={[
              {
                title: 'Home',
                itemId: '/home',
                elemBefore: () => <GiCoffeeCup />,
                // you can use your own custom Icon component as well
                // icon is optional
              },
              {
                title: 'About',
                elemBefore: () => <FaRegUser/>,
                itemId: '/about',
                subNav: [
                  {
                    title: 'Projects',
                    itemId: '/projects',
                  },
                  {
                    title: 'Members',
                    itemId: '/members',
                  },
                ],
              },
              {
                title: 'Another Tab',
                itemId: '/another',
                subNav: [
                  {
                    title: 'Teams',
                    itemId: '/teams',
                  },
                ],
              },
            ]}
          />
           </div>

            
            
            <ul className={styles.div3}>
                <li><span className={styles.setting}><AiFillSetting /></span> Settings</li>
            </ul>

        </div>
    )
    }

