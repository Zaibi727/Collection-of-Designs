import React from 'react';
import TopNav from './TopNav';
import SideNav from './SideNav';
import Profile from './Profile';
import Table from './Table';
import Typography from './Typography';
import Icons from './Icons';
import Maps from './Maps';
import Notifications from './Notifications';
import Support from './Support';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import styles from './sideBar.module.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";




export default function SideBarContainer() {
    return (
        <div className={styles.container}>
           <section className={styles.structure}>
               <div className={styles.a}>
                     <SideNav />
               </div>
               <div className={styles.b}>
                   <TopNav />
               </div>
           </section>
           
            

           <Router>
               <Switch>
                   <Route path="/profile" component={Profile} />
                   <Route path="/table" component={Table} />
                   <Route path="/typography" component={Typography} />
                   <Route path="/icons" component={Icons} />
                   <Route path="/maps" component={Maps} />
                   <Route path="/notifications" component={Notifications} />
                   <Route path="/support" component={Support} />
                   <Route path="/contact" component={Contact} />
                   <Route path="/about" component={About} />
                   <Route path="/home" component={Home} />
                   
               </Switch>
           </Router>

        </div>
    )
}
