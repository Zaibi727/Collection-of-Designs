import React from 'react';

import OverView from './pages/OverView';
import User from './pages/User';
import Revenue from './pages/Revenue'
import Profile from './pages/Profile';

import Reports from './pages/Reports';
import ReportOne from './pages/ReportOne';
import ReportTwo from './pages/ReportTwo';
import ReportThree from './pages/ReportThree';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
  } from "react-router-dom";

  import Sidebar from './Sidebar';


export default function SevenJuneContainer() {
    return (
        <div>  
        <Router>
                 <Sidebar />

                 <Switch>
                         <Route  path="/overview" exact component={ OverView } />
                        <Route  path="/overview/user" exact  component={ User } />
                        <Route  path= "/overview/revenue" exact component={ Revenue } />
                        <Route  path="/overview/profile" exact component={ Profile } />
                        <Route path="/reports" exact component={Reports} />
                        <Route path="/reports/reports-1" exact component={ ReportOne } />
                        <Route path="/reports/reports-2" exact component={ ReportTwo } />
                        <Route path="/reports/reports-3" exact component={ ReportThree } />
                  </Switch>

                  </Router>
        </div>
    )
}

