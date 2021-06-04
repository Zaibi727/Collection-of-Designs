import React, { Component} from 'react';
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

import sideItems from './sidedata';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
  useParams,
  useRouteMatch
} from "react-router-dom";



class LargSidebar extends Component {



render(){


  

return( 
            <div className={styles.largSidebarWrapper}>
            <Router>
               <div >
               {sideItems.map((item) => 
                    <ul className={styles.largUl1}>
                    <li className={styles.flex}>
                         <NavLink to={`/${item.itemid}`}  activeClassName={styles.active} className={styles.deco}>
                            
                                <p className={styles.aaa}><span>{item.Icon}</span>{item.label}</p>
                                <p className={styles.bbb}><span className={styles.arrowwss}>{item.Icon2}</span></p>
                            
                         </NavLink>
                         </li> 
                         
                            {item.content ? item.content.map((c) => 
                              
                              <ul className={styles.ulSub}>  
                              <li>                
                                <NavLink to={`/${(item.itemid) + ('/') +(c.itemid)}`} activeClassName={styles.active} className={styles.deco}>
                                   
                                      {c.label}
                                      <span className={styles.arrowwss}>{c.Icon2}</span>
                                   
                                </NavLink>
                                </li>
                              </ul>                       
                            ) : null }                                                    
                          
                    </ul>
                      )}
                </div>

               

               </Router>
            </div>
         );
}
  }
 
export default LargSidebar;