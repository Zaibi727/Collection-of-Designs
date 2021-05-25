import React from 'react'
import styles from './cartTwo.module.css';

export default function Basket(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemPrice = cartItems.reduce((a, c)=> a + c.price * c.qty, 0);
    const taxPrice = itemPrice * 0.14;
    const shippingPrice = itemPrice > 2000 ? 0 : 40;
    const totalPrice = itemPrice + taxPrice + shippingPrice;


    return (
        <div>
            <h4>
                Cart Items
            </h4>
            {cartItems.length === 0 && <h5>Cart is Empty</h5>}

            {cartItems.map((item) =>
                 <div className={styles.top} key={item.id}>
                     <div>
                         <button className={styles.add} onClick={()=>onAdd(item)}>+</button>
                           <span>{item.qty}</span>
                         <button className={styles.remove} onClick={()=>onRemove(item)}>-</button>
                     </div>
                 </div>
            )}


            {cartItems.length !== 0 && 
              <>           
              <div className={styles.botoom}>
                  <div><strong>Total Price</strong></div>
                  <div>{totalPrice}</div>
              </div>
              </>
            }

        </div>

    )}