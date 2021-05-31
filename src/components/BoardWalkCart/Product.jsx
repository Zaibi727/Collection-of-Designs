import React from 'react';
import styles from './boardwalk.module.css';

export default function Product(props) {
    const {product, onAdd} = props;
    return (
        <div className={styles.product}>
            <div className={styles.productdiv1}>
               <h4>{product.name}</h4>
               <p>
                   {product.discrip}
                </p>
               <h5>Rs {product.price}</h5>
         </div>
         <button className={styles.productAddbtn} onClick={()=> onAdd(product)}>add</button>
        </div>
    )
}
