import React, { Component } from 'react';
import FooterMailAbstract from './footerMailAbstract';
import { GoMail } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import styles from './EighteenMay.module.css';



class EighteenMayContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.doubleWrapper}>
            <div className={styles.Wrapper}>
                <div>
                    <img className={styles.logo} src="./images/softick-logo.png" />
                </div>
                  
                <ul>
                    <li><p className={styles.heading}>Contact Us</p></li>
                    <li><p className={styles.content}>Head Office</p></li>
                    <li><p  className={styles.headingg}>Legacy Plaza, Opposite Al-Maida,<br/> Kohinoor City, Faisalabad.</p></li>
                    <li><p className={styles.content}>Telephone</p></li>
                    <li><p  className={styles.headingg}>041-888888888</p></li>
                    <li><p className={styles.content}>E-mail</p></li>
                    <li><p  className={styles.headingg}>jadeite@gmail.com</p></li>
                </ul>

                <ul>
                    <li><p  className={styles.heading}>List</p></li>
                    <li className={styles.a}><a className={styles.contentList} href="#">Home</a></li>
                    <li className={styles.a}><a className={styles.contentList} href="#">About</a></li>
                    <li className={styles.a}><a className={styles.contentList} href="#">Investment Plans</a></li>
                    <li className={styles.a}><a className={styles.contentList}  href="#">Achievements</a></li>
                    <li className={styles.a}><a className={styles.contentList} href="#">Contact Sales</a></li>
                </ul>

                <ul>
                    <li><p  className={styles.heading}>Follow</p></li>
                    <li><p className={styles.followContent}>We're always on the lookout for the <br /> cutting-edge tech and brand innovations.<br/>Join us today.</p></li>
                    <li>
                        <FooterMailAbstract 
                            type="email"
                            placeholder="Your email..."
                            Icon= {GoMail}
                        />
                    </li>
                    <li className={styles.socialIcon}>
                        <a><FaFacebookF /></a>
                        <a><FaTwitter /></a>
                        <a><FaLinkedinIn /></a>
                        <a><AiFillInstagram /></a>
                    </li>
                </ul>
            </div>
            </div>
         );
    }
}
 
export default EighteenMayContainer;