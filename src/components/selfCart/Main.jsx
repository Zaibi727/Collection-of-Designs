import React from 'react';
import Product from './product';
import styles from './selfCart.module.css';

export default function Main(props) {
    const {products, onAdd} = props;
    return (
        <div>
            <h2>Products</h2>
            <div className={styles.main}>
                {products.map((product) => (
                    <Product 
                        key={product.id}
                        product={product}
                        onAdd={onAdd}
                    />
                ))}
            </div>
        </div>
    )
}
