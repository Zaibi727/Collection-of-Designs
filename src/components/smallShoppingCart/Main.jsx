import React from 'react';
import Product from './product';
import styles from './cart.module.css';

export default function Main(props) {
    const {products, onAdd} = props;
    return (
        <main>
            <h2>
                Products
            </h2>
            <div className={styles.cards}>
                {products.map((product) => (
                    <Product 
                    key={product.id}
                    product={product} 
                    onAdd={onAdd}
                    ></Product>
                ))}
            </div>
        </main>
    )
}