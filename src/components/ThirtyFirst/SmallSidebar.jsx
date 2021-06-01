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
import {BsDot} from 'react-icons/bs';


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
                        <Menu className={styles.smallmenu}  menuButton={<MenuButton className={styles.smallmenubtn}><AiOutlineLayout /></MenuButton>}>
                          <MenuItem>Layout</MenuItem>
                          <MenuItem >Light Theme</MenuItem>
                        <MenuItem >Dark Theme</MenuItem>
                       </Menu>
                    </li>
                     
                    <li><FiLogOut /></li>
                    <li>
                    <Menu className={styles.smallmenu}  menuButton={<MenuButton className={styles.smallmenubtn}><GrDiamond /></MenuButton>}>
                          <MenuItem>Alert</MenuItem>
                          <MenuItem >Buttons</MenuItem>
                          <MenuItem >Carousel</MenuItem>
                          <MenuItem>Grids</MenuItem>
                          <MenuItem >Modal</MenuItem>
                          <MenuItem >Notifications</MenuItem>
                          <MenuItem>Panels</MenuItem>
                          <MenuItem >Progess Bar</MenuItem>
                          <MenuItem >Tabs</MenuItem>
                          <MenuItem>Timeline</MenuItem>
                          <MenuItem >Tooltip and Popures</MenuItem>
                          <MenuItem >Typography</MenuItem>
                       </Menu>
                    </li>
                    <li><FiMail  /></li>
                    <li><BsFillChatFill /></li>
                    <li><SiTodoist /></li>
                    <li>
                       <Menu className={styles.smallmenu}  menuButton={<MenuButton className={styles.smallmenubtn}><FaWpforms /></MenuButton>}>
                          <MenuItem>Redux Forms</MenuItem>
                          <SubMenu>
                              <MenuItem>Basic Form</MenuItem>
                              <MenuItem>Check Form Control</MenuItem>
                              <MenuItem>File Upload</MenuItem>
                              <MenuItem>Floating Labels</MenuItem>
                              <MenuItem>Form Layout</MenuItem>
                              <MenuItem>Form Picker</MenuItem>
                              <MenuItem>Form Validation</MenuItem>
                              <MenuItem>Material form</MenuItem>
                              <MenuItem>Wizard Form</MenuItem>
                        </SubMenu>
                          <MenuItem >Hooks form
                            <SubMenu>
                                <MenuItem>Basic Form</MenuItem>
                                <MenuItem>Form Validation</MenuItem>
                                <MenuItem>Wizard Form</MenuItem>
                            </SubMenu>
                          </MenuItem>
                        
                       </Menu>
                    </li>
                    <li>
                    <Menu className={styles.smallmenu}  menuButton={<MenuButton className={styles.smallmenubtn}><AiOutlineTable /></MenuButton>}>
                          <MenuItem>Tables<BsDot className={styles.dot} /></MenuItem>
                          <MenuItem>Basic tables</MenuItem>
                          <MenuItem >Data tables <span className={styles.redNew}>New</span></MenuItem>
                          <MenuItem >Drag & Drop table <span className={styles.redNew}>New</span></MenuItem>
                          <MenuItem>Editable tables</MenuItem>
                          <MenuItem >Material tables</MenuItem>
                          <MenuItem >Width resizeable table <span className={styles.redNew}>New</span></MenuItem>
                       </Menu>
                    
                    </li>
                    <li>
                        <Menu className={styles.smallmenu}  menuButton={<MenuButton className={styles.smallmenubtn}><IoBarChartSharp /></MenuButton>}>
                          <MenuItem>ChartJS</MenuItem>
                          <MenuItem >React-vis</MenuItem>
                        <MenuItem >Recharts</MenuItem>
                       </Menu>
                    </li>
                    <li>
                    
                    <Menu className={styles.smallmenu}  menuButton={<MenuButton className={styles.smallmenubtn}><SiGooglemaps /></MenuButton>}>
                          <MenuItem>Maps<BsDot className={styles.dot} /></MenuItem>
                          <MenuItem>Google maps</MenuItem>
                          <MenuItem>Vector maps</MenuItem>
                        <MenuItem >Map with api request <span className={styles.redNew}>New</span></MenuItem>
                       </Menu>
                       
                    </li>
                    <li>
                    <Menu className={styles.smallmenu}  menuButton={<MenuButton className={styles.smallmenubtn}><BiUser /></MenuButton>}>
                          <MenuItem>Email confimation</MenuItem>
                          <MenuItem>Lock Screen</MenuItem>
                          <MenuItem>Log In Photo</MenuItem>
                          <MenuItem>Profile</MenuItem>
                          <MenuItem>Register</MenuItem>
                          <MenuItem >Reset Password <span className={styles.redNew}>New</span></MenuItem>
                          <MenuItem >Reset Password Photo <span className={styles.redNew}>New</span></MenuItem>
                       </Menu>
                    </li>
                    <li>
                    <Menu className={styles.smallmenu}  menuButton={<MenuButton className={styles.smallmenubtn}><AiOutlineShoppingCart /></MenuButton>}>
                          <MenuItem>Cart</MenuItem>
                          <MenuItem>Catalog</MenuItem>
                          <MenuItem>Orderd List</MenuItem>
                          <MenuItem>Payment</MenuItem>
                          <MenuItem>Prodcut Edit</MenuItem>
                          <MenuItem>Product Page</MenuItem>
                          <MenuItem>roduct List</MenuItem>
                       </Menu>
                    </li>
                    <li>
                    <Menu className={styles.smallmenu}  menuButton={<MenuButton className={styles.smallmenubtn}><RiPagesLine /></MenuButton>}>
                          <MenuItem>404</MenuItem>
                          <MenuItem>Calendar</MenuItem>
                          <MenuItem>FAQ's</MenuItem>
                          <MenuItem>Gallery</MenuItem>
                          <MenuItem>Invoice tempalte</MenuItem>
                          <MenuItem>Pricing Cards</MenuItem>
                          <MenuItem>Project Summary</MenuItem>
                          <MenuItem>Search results</MenuItem>
                          <MenuItem>Text Editors</MenuItem>
                       </Menu>
                    </li>
                    <li>
                    <Menu className={styles.smallmenu}  menuButton={<MenuButton className={styles.smallmenubtn}><GiHamburgerMenu /></MenuButton>}>
                          <MenuItem>Second Level Item</MenuItem>
                          <MenuItem>Second Level Item</MenuItem>
                       </Menu>
                    </li>
                    <li><BiLogIn /></li>
                    <li><TiDocumentText /></li>
                </ul>
            </div>
         );
    }
}
 
export default SmallSidebar;