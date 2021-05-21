import React from 'react';
import styles from './cart.module.css';

export default function Basket(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
       <aside className={styles.basket}>
           <h4 className={styles.hh4}>Cart Items</h4>
           <div>
               {cartItems.length === 0 && <div>Cart Is Empty</div>}
           </div>
          
            {cartItems.map((item) => (
                <div key={item.id} className={styles.priceTop}>
                   <div>
                       {item.name}
                   </div>
                   <div>
                       <button className={styles.add} onClick={()=>onAdd(item)}>+</button>
                       <button className={styles.remove} onClick={()=>onRemove(item)}>-</button>
                   </div>
                   <div>
                       {item.qty} x ${item.price.toFixed(2)}
                   </div>
                </div>
            ))}


            {cartItems.length !== 0 && (
                <>
                <hr></hr>
                   <div className={styles.list}>
                        <div>Item Price</div>
                        <div>${itemsPrice.toFixed(2)}</div>
                   </div>
                   <div className={styles.list}>
                        <div>Tax Price</div>
                        <div>${taxPrice.toFixed(2)}</div>
                   </div>
                   <div className={styles.list}>
                        <div>Shipping Price</div>
                        <div>${shippingPrice.toFixed(2)}</div>
                   </div>
                   <hr></hr>
                   <div className={styles.list}>
                        <div><strong>Total Price</strong></div>
                        <div>${totalPrice.toFixed(2)}</div>
                   </div>
                   <div>
                       <button className={styles.checkOut} onClick={() => alert('Implement Checkout')}>
                           Check Out
                       </button>
                   </div>
                </>
            )}

       </aside>
    )
}