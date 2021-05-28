import React from 'react';
import RouterHeader from './routerHeader';
import Home from './Home';
import Contact from './Contact';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

export default function RouterContainer() {
    return (
        <div>
            <RouterHeader />
          <Router>
          <Switch>
                 <Route path="/home"  component={Home} />
                 <Route path="/contact" component={Contact} />
        </Switch>
          </Router>
            Router Cotainer
        </div>
    )
}
