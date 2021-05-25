import React from 'react';
import styles from './Dribble.module.css';
import Product from './Product';

export default function Main(props) {
    const {products, cartItems, onAdd, onRemove} = props;
    return (
       <div className={styles.mainWrapper}>
           <table className={styles.headTab}>
               <tr className={styles.headTr}>
                   <th>Product</th>
                   <th>Price</th>
                   <th>Quality</th>
                   <th>Total</th>
               </tr>
           </table>
            <div className={styles.main}>
            {products.map((product) =>
               <Product 
                   key={product.id}
                   product={product}
                   cartItems={cartItems}
                   onAdd={onAdd}
                   onRemove={onRemove}
               />
            )}
        </div>
       </div>
    )
}
