import React from 'react';
import styles from './cart.module.css';


export default function Product (props) {
    const {product, onAdd} = props;
    return (
        <div>
            <img className={styles.img} src={product.image} alt={product.name} />
              <h3 className={styles.h3}>{product.name}</h3>
              <div>${product.price}</div>
              <div>
                  <button onClick={()=>onAdd(product)} className={styles.btnAdd}>Add To Cart</button>
              </div>
        </div>
    )
};

