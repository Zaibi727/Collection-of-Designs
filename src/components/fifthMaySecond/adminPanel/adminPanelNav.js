import React, { Component } from 'react';
import styles from './adminPanel.module.css';
import AdminPanelAbstract from './adminPanelAbstract';
import { AiOutlineHome } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { RiReservedFill } from "react-icons/ri";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { GiTrophy } from "react-icons/gi";
import { BiStats } from "react-icons/bi";
import { BsFileText } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

class AdminPanel extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.adminPanelWrapper}>
                <div>
                    <p className={styles.sqHead}>SQUARE</p>
                    <p className={styles.subP}>admin panel</p>
                </div>

                 <ul className={styles.ulNav}>
                     <li><span><AiOutlineHome /></span><a>Home</a></li>
                     <li><span><FiUsers /></span><a>Database</a></li>
                     <li><span><RiReservedFill /></span><a>Reservations</a></li>
                     <li><span><AiOutlineCalendar /></span><a>Projects</a></li>
                     <li><span><BsPencil /></span><a>Blog feeds</a></li>
                     <li><span><GiTrophy /></span><a>Awards</a></li>
                     <li><span><BiStats /></span><a>Stats</a></li>
                     <li><span><BsFileText /></span><a>Accounting</a></li>
                     <li><span><FiSettings /></span><a>Settings</a></li>
                 </ul>

                 <div className={styles.adminPanelBottom}>
                 <AdminPanelAbstract 
                     label1='Teammates'
                     label2='Inivite people'
                     src="./images/profile.jpg"
                 />
                 </div>

            </div>
         );
    }
}
 
export default AdminPanel;