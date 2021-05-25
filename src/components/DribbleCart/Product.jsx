import React from 'react';
import styles from './Dribble.module.css';


export default function Product(props) {
    const {product, cartItems, onAdd, onRemove} = props;
    const itemPrice = cartItems.reduce((a, c)=> a + c.price * c.qty, 0);
    const taxPrice = itemPrice * 0.14;
    const shippingPrice = itemPrice > 2000 ? 0 : 40;
    const totalPrice = itemPrice + taxPrice + shippingPrice;


    return (
        <div className={styles.productWrapper}>
            <table className={styles.table}>
                 <tbody className={styles.tBody}>
                     <tr className={styles.trdata}>
                         <div className={styles.productdis}>
                             <img className={styles.img} src={product.image}/>
                             <div className={styles.p}>
                                 <p className={styles.name}>{product.name}</p>
                                 <p className={styles.size}> Size :{product.size}</p>
                                 <p className={styles.color}> Color : {product.color}</p>
                             </div>
                         </div>
                         <div>
                             <strong>${product.price}</strong>
                         </div>

                         <div className={styles.btnDiv}>
                             <button onClick={()=>onRemove(product)}>-</button>                                                                               
                               <span>
                               {cartItems.map((item) =>
                                    <div key={item.id}>
                                        <p>{item.qty}</p>
                                    </div>
                                 )}
                               </span>
                             <button onClick={()=>onAdd(product)}>+</button>
                         </div>
                         
                         <div>
                             {cartItems.length !== 0 &&
                                <>
                                   <div><strong>${totalPrice.toFixed(2)}</strong></div>
                                </>
                             }
                        
                         </div>
                     </tr>
                 </tbody>
            </table>
        </div>
    )
}
