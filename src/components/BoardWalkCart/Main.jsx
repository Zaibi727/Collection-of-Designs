import React from 'react';
import Product from './Product';
import styles from './boardwalk.module.css';

export default function Main(props) {
  const {products, onAdd} = props;

    return (
        <div className={styles.main}>
           {products.map((product) => (
                        <Product 
                            key={product.id}
                            product={product}
                            onAdd={onAdd}
                        />
                    ))}
        </div>
    )
}
