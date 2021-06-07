import React,{useState} from 'react';
import styles from './sevenJune.module.css';

import Sidebar from './Sidebar';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
  } from "react-router-dom";



const SubMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false);

 const showSubnav = () => setSubnav(!subnav);

    return(
        <>
        <Router>
          <NavLink className={styles.link} to={item.path} onClick={item.subNav && showSubnav}>
                <div className={styles.sidebarLink}>          
                    <div>
                        {item.icon}
                        <label>{item.title}</label>
                    </div>
                   <div>
                       { item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                   </div>
                </div>         
          </NavLink>

            {subnav && item.subNav.map((item, index) => {
              return (
                  <NavLink className={styles.subMenuL} to={item.path} key={index}>
                         {item.icon}
                      <label>{item.title}</label>
                  </NavLink>
              )
             })}


          </Router>
        </>
    )
}

export default SubMenu;