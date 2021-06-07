import React from 'react';

import Sidebar from './Sidebar';



import Reports from './pages/Reports';
import ReportOne from './pages/ReportOne';
import ReportTwo from './pages/ReportTwo';
import ReportThree from './pages/ReportThree';

import OverView from './pages/OverView';
import User from './pages/User';
import Revenue from './pages/Revenue'
import Profile from './pages/Profile';

import Product from './pages/Product';
import Team from './pages/Team';
import Support from './pages/Support';

import Message from './pages/Message';
import Notification from './pages/Notification';
import Mail from './pages/Mail';

import {
    BrowserRouter,
    Switch,
    Route, 
    Link,
  } from "react-router-dom";

export default function SevenJuneContainer() {
    return (
        <div>  
        <BrowserRouter>
                   <div>
                   <Sidebar />
                   </div>

           <Switch>
           <Route path="/overview" exact>
                   <OverView />
              </Route>

              <Route path="/overview/users">
                   <User />
              </Route>
              <Route path="/overview/profile">
                   <Profile />
              </Route>

              <Route path="/overview/revenue">
                   <Revenue />
              </Route>

              <Route path="/reports" exact>
                   <Reports />
              </Route>

              <Route path="/reports/reports-1">
                   <ReportOne />
              </Route>
              <Route path="/reports/reports-2">
                   <ReportTwo />
              </Route>
              <Route path="/reports/reports-3">
                   <ReportThree />
              </Route>

              <Route path="/products">
                   <Product />
              </Route>
              <Route path="/supports">
                   <Support />
              </Route>
              <Route path="/team">
                   <Team />
              </Route>

              <Route path="/message" exact>
                   <Message />
              </Route>
              <Route path="/Message/notifications">
                   <Notification />
              </Route>
              <Route path="/message/mails">
                   <Mail />
              </Route>
    
           </Switch>
               

        </BrowserRouter>
        </div>
    )
}

