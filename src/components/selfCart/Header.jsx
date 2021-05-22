import React from 'react';
import styles from './selfCart.module.css';

export default function Header(props) {
    const {countCartItems} = props;
    return (
        <div>
            <header className={styles.header}>
                <div>
                    <h3>self designed shopping cart</h3>
                </div>
                <div>
                    <a>Cart
                    {" "}
                       {countCartItems ? (
                           <button className={styles.navTotal}>{countCartItems}</button>
                       ): (
                           ''
                       )
                       }
                    </a>
                    <a>Sign In</a>
                </div>
            </header>
        </div>
    )
}
