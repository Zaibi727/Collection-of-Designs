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


import { render } from '@testing-library/react';

class LargSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      opena: false,
    }
    this.handleButtonAClick = this.handleButtonAClick.bind(this);
  }

  handleButtonAClick = () => {
    this.setState(state => {
      return {
        opena: !state.opena,
      };
    });
  };

  container = React.createRef();

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutsideA);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutsideA);
  }

  handleClickOutsideA = event => {
    if (this.container.current && !this.container.current.contains(event.target)) {
      this.setState({
        opena: false,
      });
    }
  };


render(){
return( 
            <div className={styles.largSidebarWrapper}>
            <Router>
               <div >
               {sideItems.map((item) => 
                    <ul className={styles.largUl1}>
                         <NavLink to={`/${item.itemid}`}  className={styles.link} activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>
                            <li className={styles.flex}  activeClassName={styles.active}>
                               <p className={styles.aaa}><span>{item.Icon}</span>{item.label}</p>
                                <p className={styles.bbb}><span className={styles.arrowwss}>{item.Icon2}</span></p>
                            </li> 
                         </NavLink>
                   
                            {item.content ? item.content.map((c) => 
                              
                              <ul className={styles.ulSub}>                    
                                <NavLink to={`/${(item.itemid) + ('/') +(c.itemid)}`} activeClassName={styles.active}>
                                   <li>
                                      {c.label}
                                      <span className={styles.arrowwss}>{c.Icon2}</span>
                                   </li>
                                </NavLink>
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