import React from 'react';
import styles from './selfCart.module.css';


export default function Basket(props) {
    const {cartItems, onAdd, onRemove} = props;
   const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
   const taxPrice = itemsPrice * 0.14;
   const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice +  taxPrice + shippingPrice;

    return (
        <div className={styles.basket}>
            <h4>Cart Items</h4>
            { cartItems.length === 0 && <h6>Cart is Empty</h6>}


            {cartItems.map((item) => (
                   <div key={item.id} className={styles.cartCalcu}>
                      <div className={styles.name}>
                         {item.name}
                       </div>
                        <div className={styles.btnsDiv}>
                           <button className={styles.add} onClick={()=>onAdd(item)}>+</button>
                           <button className={styles.remove}  onClick={()=>onRemove(item)}>-</button>
                         </div>
                         <div className={styles.amount}>
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


        </div>
    )}

