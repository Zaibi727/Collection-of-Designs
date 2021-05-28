import React from 'react';
import styles from './sideBar.module.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



export default function TopNav() {
    return (
        <div>
            <header className={styles.header}>
                <h4>Logo</h4>
                <ul className={styles.headerUl}>
                  <Router>
                  <Link className={styles.topLink} to="/home" onClick={() => {window.location.href="/home"}}>
                      <li>Home</li>
                   </Link>
                   <Link className={styles.topLink} to="/about" onClick={() => {window.location.href="/about"}}>
                      <li>About</li>
                   </Link>
                   <Link className={styles.topLink} to="/contact" onClick={()=>{window.location.href="/contact"}}>
                      <li>Contact</li>
                   </Link>
                   <Link className={styles.topLink} to="/" onClick={() => {window.location.href="/"}}>
                      <li>FAQs</li>
                   </Link>
                  </Router>
                </ul>
            </header>
        </div>
    )
}
