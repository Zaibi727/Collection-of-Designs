import React from 'react';
import SideNav from './SideNav';
import HeaderNav from './HeaderNav';
import styles from './sidebarsub.module.css';

import Projects from './Projects';
import Members from './Members';
import Teams from './Teams';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
  } from "react-router-dom";

export default function SiderBarSubContainer() {
    return (
        <div className={styles.conatiner}>
            <div>
               
                <SideNav />
            </div>
            <div>
              <HeaderNav />
            </div>

            <Router>
<Switch>
                   
                   <Route path="/projects" component={Projects} />
                   <Route path="/members" component={Members} />
                   <Route path="/teams" component={Teams} />                
                </Switch>
</Router>

        </div>
    )
}
