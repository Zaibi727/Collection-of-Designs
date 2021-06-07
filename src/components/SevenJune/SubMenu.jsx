import React,{useState} from 'react';
import styles from './sevenJune.module.css';



import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link,
  } from "react-router-dom";



const SubMenu = ({item}) => {

 const [subnav, setSubnav] = useState(false);
 const showSubnav = () => setSubnav(!subnav);



    return(
        <div>
          <Link className={styles.link} to={item.path}  onClick={item.subNav && showSubnav} >
                <div className={styles.sidebarLink} >          
                    <div>
                        {item.icon}
                        <label>{item.title}</label>
                    </div>
                   <div>
                       { item.subNav && subnav 
                       ? item.iconOpened 
                       : item.subNav 
                       ? item.iconClosed 
                       : null}
                   </div>
                </div>         
          </Link>

            {subnav && item.subNav.map((item, index) => {
              return (
                  <Link className={styles.link}  to={item.path}>
                       <div key={index} className={styles.subMenuL}>
                                 {item.icon}
                          <label>{item.title}</label>
                       </div>
                  </Link>
              )
             })}
        </div>
    )
}

export default SubMenu;