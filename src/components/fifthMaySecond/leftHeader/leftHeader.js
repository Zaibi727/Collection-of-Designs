import React, { Component } from 'react';
import AbstractOne from './leftAbstractOne';
import { AiOutlinePlus } from 'react-icons/ai';
import LeftAbstractTwo from './leftAbstract2';
import { RiFullscreenFill } from 'react-icons/ri';
import { IoLogoPython } from 'react-icons/io5';
import styles from './leftHeader.module.css';

class LeftHeader extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.leftHeadeWrapper}>
                <ul className={styles.ul1}>
                    <li><a><IoLogoPython className={styles.siteLogo} /></a></li>
                    <li><a><img className={styles.imgs}  src="./images/profile.jpg"/></a></li>
                    <li><a><img className={styles.imgs}  src="./images/profile.jpg"/></a></li>
                    <li><a><img  className={styles.imgs} src="./images/profile.jpg"/></a></li>
                    <li><a><img  className={styles.imgs} src="./images/profile.jpg"/></a></li>
                    <li><a><img  className={styles.imgs} src="./images/profile.jpg"/></a></li>
                    <li><a><img  className={styles.imgs} src="./images/profile.jpg"/></a></li>
                    <li className={styles.plusBtnLi}>
                        <AbstractOne 
                            Icon={AiOutlinePlus}
                        />
                    </li>
                </ul>

                <ul className={styles.ul2}>
                    <li>
                    <LeftAbstractTwo
                     label='Me'
                     Icon={RiFullscreenFill}
                     src="./images/profile.jpg"
                     />
                    </li>
                </ul>
            </div>
         );
    }
}
 
export default LeftHeader;