import React from 'react';
import styles from './boardwalk.module.css';

export default function Basket(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const totalPrice = itemPrice;

    return (
        <div className={styles.basket}>
            <h2>Basket</h2>
           {cartItems.length === 0 && <h4>CartItems</h4>}

           {cartItems.map((item) => 
           <div className={styles.ss} key={item.id}>
                   <p>{item.name}</p>
                   <div>
                       <button className={styles.bAdd} onClick={()=>onRemove(item)}>-</button>
                       <span className={styles.bSpan}>{item.qty}</span>
                       <button className={styles.bRemove} onClick={()=>onAdd(item)}>+</button>
                   </div>
           </div>
           )}

           <hr></hr>
             
             {cartItems.length !==0 && 
                <>
                   <h4>Total Price:</h4>
                   <p>Rs  {itemPrice}</p>
                </>
             }
        </div>
    )
}
