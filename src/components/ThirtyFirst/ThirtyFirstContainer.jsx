import React, { Component } from 'react';
import TopBar from './TopBar';

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
            <div>
              <Router>
              <div>
                <TopBar />
              </div>

              <Route path="/:id" />
              </Router>
            </div>
         );
    }
}
 
export default ThirtyFirstContainer;