import React from 'react';
import styles from './cart.module.css';

export default function Header(props) {
    const {countCartItems} = props;
    return (
        
              <header className={styles.header}>
                   <div className={styles.div1}>
                       <a href="#/">
                           <h1>Small Shopping Cart</h1>
                       </a>
                   </div>
                   <div className={styles.div2}>
                       <a href="#/cart">
                       
                       Cart{" "}
                       {countCartItems ? (
                           <button className={styles.navTotal}>{countCartItems}</button>
                       ): (
                           ''
                       )
                       }
                       
                       </a>


                       <a href="#/signin">SignIn</a>
                   </div>
              </header>
        
    )
}
