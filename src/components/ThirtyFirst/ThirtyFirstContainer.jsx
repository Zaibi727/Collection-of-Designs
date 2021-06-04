import React, { Component } from 'react';
import TopBar from './TopBar';
import styles from './thirtyFirst.module.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class ThirtyFirstContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.container}>
              <Router>
              <div className={styles.up}>
                <TopBar />
              </div>

              <Route path="/:id" />
              </Router>
            </div>
         );
    }
}
 
export default ThirtyFirstContainer;