import React, { Component, useLayoutEffect } from 'react';
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

import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

class SmallSidebar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.smallbarWrapper}>
                <ul className={styles.smallUl}>
                    <li><AiOutlineHome/></li>
                    <li><FaStore /></li>
                    <li><AiOutlineMobile /></li>
                    <li><BiBookOpen /></li>
                    <li><GoRocket /></li>
                    <li>
                       <Menu className={styles.smallmenu} menuButton={<MenuButton ><AiOutlineLayout /></MenuButton>}>
                         <MenuItem >forms</MenuItem>
                         <MenuItem >fge</MenuItem>
                        <MenuItem >ergergerg</MenuItem>
                       </Menu>
                    </li>
                    <li><FiLogOut /></li>
                    <li><GrDiamond /></li>
                    <li><FiMail  /></li>
                    <li><BsFillChatFill /></li>
                    <li><SiTodoist /></li>
                    <li><FaWpforms /></li>
                    <li><AiOutlineTable /></li>
                    <li><IoBarChartSharp /></li>
                    <li><SiGooglemaps /></li>
                    <li><BiUser /></li>
                    <li><AiOutlineShoppingCart /></li>
                    <li><RiPagesLine /></li>
                    <li><GiHamburgerMenu /></li>
                    <li><BiLogIn /></li>
                    <li><TiDocumentText /></li>
                </ul>
            </div>
         );
    }
}
 
export default SmallSidebar;