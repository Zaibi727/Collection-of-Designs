import React from 'react';
import RouterContainer from './routerContainer';
import styles from './routerOne.module.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default function RouterHeader() {
    return (
        <div>
            <header className={styles.header}>
                <ul className={styles.headerUl}>
                    <Router>
                      <Link to="home" refresh="true">
                       Logo
                    </Link>
                    <Link to="home" refresh="true">
                       <li onClick={() => {window.location.href="/home"}}>Home</li>
                    </Link>
                    <Link to="contact">
                        <li  onClick={() => {window.location.href="/contact"}}>Conatct Us</li>
                    </Link>
                    </Router>
                   
                  
                </ul>
            </header>
        </div>
    )
}
