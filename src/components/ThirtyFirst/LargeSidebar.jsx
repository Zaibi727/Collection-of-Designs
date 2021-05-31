import React, { Component } from 'react';
import styles from './thirtyFirst.module.css';

import { AiOutlineHome } from "react-icons/ai";
import { FaStore} from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";
import { BiBookOpen } from "react-icons/bi";
import { GoRocket } from "react-icons/go";
import { AiOutlineLayout } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

import { GrDiamond  } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { BsFillChatFill } from "react-icons/bs";
import { SiTodoist } from "react-icons/si";
import { FaWpforms } from "react-icons/fa";
import { AiOutlineTable } from "react-icons/ai";
import { IoBarChartSharp } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";


import { BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

import { BiLogIn } from "react-icons/bi";
import { TiDocumentText } from "react-icons/ti";



class LargSidebar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.largSidebarWrapper}>
                <ul className={styles.largUl1}>
                    <li><span><AiOutlineHome /></span> Online Marketing Dashboard</li>
                    <li><span><FaStore /></span> E-commerce Dashboard</li>
                    <li><span><AiOutlineMobile /></span> App Dashboard</li>
                    <li><span><BiBookOpen /></span> Booking Dashboard</li>
                    <li><span><GoRocket /></span> Finance Dashboard</li>
                    <li><span><FiLogOut /></span> Fitness Dashboard</li>
                    <li><span><AiOutlineLayout /></span>Layout</li>
                    <li><span><FiLogOut /></span>Log In</li>
                </ul>

                <ul className={styles.largUl2}>
                    <li><span><GrDiamond /></span>Ul Elements</li>
                    <li><span><FiMail /></span> Mail Application</li>
                    <li><span><BsFillChatFill /></span>Chat Application</li>
                    <li><span><SiTodoist /></span> Todo Application</li>
                    <li><span><FaWpforms /></span> Forms</li>
                    <li><span><AiOutlineTable /></span> Tables</li>
                    <li><span><IoBarChartSharp /></span>Charts</li>
                    <li><span><SiGooglemaps /></span>Maps</li>
                </ul>

                <ul className={styles.largUl3}>
                    <li><span><BiUser /></span>Account</li>
                    <li><span><AiOutlineShoppingCart /></span> E-commerce</li>
                    <li><span><RiPagesLine /></span>Default Pages</li>
                    <li><span><GiHamburgerMenu /></span>Multilevel Menu</li>
                </ul>

                <ul className={styles.largUl4}>
                    <li><span><BiLogIn /></span>Log Out</li>
                </ul>

                <ul className={styles.largUl5}>
                    <li><span><TiDocumentText /></span>Documentation</li>
                </ul>
            </div>
         );
    }
}
 
export default LargSidebar;