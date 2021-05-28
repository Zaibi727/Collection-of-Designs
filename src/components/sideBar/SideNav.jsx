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

import Profile from './Profile';
import Table from './Table';
import Typography from './Typography';
import Icons from './Icons';
import Maps from './Maps';
import Notifications from './Notifications';
import Support from './Support';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";


export default function SideNav() {


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
                        <li className={styles.dashboard}>
                           <NavLink to="/" className={styles.linkk}><span><MdDashboard /></span>Dashboard</NavLink>
                        </li>
                    
                   
                         <li>
                            <NavLink activeStyle={{
                                        fontWeight: "bold",
                                       color: "orange"
                                             }}
                                to="/profile" className={styles.link}> <span><FaUser /></span>User Profile</NavLink>
                         </li>
                   
                    
                        <li>
                            <NavLink to="/table" className={styles.link} activeStyle={{
                                        fontWeight: "bold",
                                       color: "orange"
                                             }}>
                            <span><HiOutlineClipboardList /></span>Tbale List</NavLink>
                        </li>
                
                   
                         <li>
                             <NavLink activeStyle={{
                                        fontWeight: "bold",
                                       color: "orange"
                                             }} to="/typography" className={styles.link}><span><HiOutlineNewspaper /></span>Typography</NavLink>
                         </li>
                   
                    
                         <li>
                           <NavLink activeStyle={{
                                        fontWeight: "bold",
                                       color: "orange"
                                             }} to="/icons" className={styles.link}><span><SiIcon /></span>Icons</NavLink>
                         </li>
                
                    
                         <li>
                               <NavLink activeStyle={{
                                        fontWeight: "bold",
                                       color: "orange"
                                             }} to="/maps" className={styles.link}><span><FaMapMarkerAlt /></span>Maps</NavLink>
                         </li>
                    
                    
                           <li >
                              <NavLink activeStyle={{
                                        fontWeight: "bold",
                                       color: "orange"
                                             }} to="/notifications" className={styles.link}><span><IoNotifications /></span>Notifications</NavLink>
                           </li>
                    
                   
                        <li>
                            <NavLink activeStyle={{
                                        fontWeight: "bold",
                                       color: "orange"
                                             }} to="/support" className={styles.link}> <span><HiSupport /></span>RTL Support</NavLink>
                        </li>
                    
                        <Switch>
                   <Route path="/profile">
                       <Profile />
                   </Route>
                   <Route path="/table" component={Table} />
                   <Route path="/typography" component={Typography} />
                   <Route path="/icons" component={Icons} />
                   <Route path="/maps" component={Maps} />
                   <Route path="/notifications" component={Notifications} />
                   <Route path="/support" component={Support} />                   
                </Switch>
                    
                    </Router>
                </ul>
            </section>
            <div className={styles.upgradeDiv}> 
                  <p className={styles.upgrade}><span className={styles.lastSpan}><FaArrowCircleUp /></span> Upgrade To PRO</p>
            </div>
        </div>
    )
}
