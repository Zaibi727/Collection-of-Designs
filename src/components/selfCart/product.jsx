import React from 'react';
import styles from './selfCart.module.css';

export default function Product(props) {
    const {product, onAdd} = props
    return (
        <div>
            <img className={styles.img} src={product.image} alt={product.name} />
            <h5 className={styles.nname}>{product.name}</h5>
            <p className={styles.pprice}>${product.price}</p>
            <button className={styles.addCartBtn} onClick={()=> onAdd(product)}>
                Add to Cart
            </button>
        </div>
    )
}
