import React from 'react';
import styles from './sideBar.module.css';
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { SiIcon } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { HiSupport } from "react-icons/hi";
import { FaReact } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default function SideNav(props) {


   const myStyle = {
        backgroundImage: "url(/images/bc2.jpg)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        maxWidth: '100%',
        height: '100vh',
     }


    return (
        <div className={styles.SideNavWrapper} style={myStyle}>
                <section className={styles.SideNavSec}>
                    <div className={styles.sideNavDiv1}>
                        <p className={styles.p1}><FaReact /></p>
                        <p className={styles.p2}>CREATIVE TIM</p>
                      </div>
                <ul className={styles.SideNavUl}>
                   <Router>
                    
                        <li className={styles.dashboard}  onClick={() => {window.location.href="/"}}><span><MdDashboard /></span>
                           <Link to="/" className={styles.linkk}>Dashboard</Link>
                        </li>
                    
                   
                         <li><span><FaUser /></span>
                            <Link to="/profile" className={styles.link}  onClick={() => {window.location.href="/profile"}}>User Profile</Link>
                         </li>
                   
                    
                        <li onClick={() => {window.location.href="/table"}}><span><HiOutlineClipboardList /></span>
                            <Link to="/table" className={styles.link}>Tbale List</Link>
                        </li>
                
                   
                         <li onClick={() => {window.location.href="/typography"}}><span><HiOutlineNewspaper /></span>
                             <Link to="/typography" className={styles.link}>Typography</Link>
                         </li>
                   
                    
                         <li onClick={() => {window.location.href="/icons"}}><span><SiIcon /></span>
                           <Link to="/icons" className={styles.link}>Icons</Link>
                         </li>
                
                    
                         <li onClick={() => {window.location.href="/maps"}}><span><FaMapMarkerAlt /></span>
                               <Link to="/maps" className={styles.link}>Maps</Link>
                         </li>
                    
                    
                           <li  onClick={() => {window.location.href="/notifications"}}><span><IoNotifications /></span>
                              <Link to="/notifications" className={styles.link}>Notifications</Link>
                           </li>
                    
                   
                        <li onClick={() => {window.location.href="/support"}}><span><HiSupport /></span>
                            <Link to="/support" className={styles.link}>RTL Support</Link>
                        </li>
                    

                    
                    </Router>
                </ul>
            </section>
            <div className={styles.upgradeDiv}> 
                  <p className={styles.upgrade}><span className={styles.lastSpan}><FaArrowCircleUp /></span> Upgrade To PRO</p>
            </div>
        </div>
    )
}
