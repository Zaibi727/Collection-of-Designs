import React from 'react';
import styles from './sideBar.module.css';


import Home from './Home';
import Contact from './Contact';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";



export default function TopNav() {
    return (
        <div>
            <header className={styles.header}>
                <ul className={styles.headerUl}>
                  <Router  >    
                      <li className={styles.active}>
                         <NavLink activeStyle={{
                                        fontWeight: "bold",
                                       color: "orange"
                                             }} className={styles.topLink} to="home"><div>Home</div></NavLink>
                      </li>
                      <li className={styles.active}>
                         <NavLink activeStyle={{
                                        fontWeight: "bold",
                                       color: "orange"
                                             }} className={styles.topLink} to="/about">About</NavLink>
                      </li>
                      <li className={styles.active}>
                         <NavLink activeStyle={{
                                        fontWeight: "bold",
                                       color: "orange"
                                             }} className={styles.topLink} to="/contact">Contact Us</NavLink>
                      </li>
                      <li className={styles.active}>
                         <NavLink activeStyle={{
                                        fontWeight: "bold",
                                       color: "orange"
                                             }} className={styles.topLink} to="/">FAQ's</NavLink>
                      </li>
                         <Switch>
                         <Route path="/contact" component={Contact} />
                          <Route path="/home" component={Home} />
                          
                         </Switch>
                  </Router>
                  
                </ul>
            </header>
        </div>
    )
}

