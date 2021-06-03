import React from 'react';
import SideBar from './SideBar';
import Home from './Home';
import About from './About';
import Product from './Product';
import styles from './juneThree.module.css';
import ProductDetial from './ProductDetial';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function JuneThreeContainer() {
    return (
        <div className={styles.container}>
          <Router>
            <SideBar />
              <Route path="/" exact  />
              <Route path="/home" component={ Home } />
              <Route path="/about" component={ About } />
              <Route path="/product" exact component={ Product } />
              <Route path="/product/:id" component={ ProductDetial } />
          </Router>
        </div>
    )
}

