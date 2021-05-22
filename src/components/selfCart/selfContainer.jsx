import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Basket from './Basket';
import data from './data';
import styles from './selfCart.module.css';


export default function SelfContaine() {
const {products} = data;
const [cartItems, setCartItems] = useState([]);


const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist){
        setCartItems(
            cartItems.map((x) => 
            x.id === product.id ? {...exist, qty: exist.qty + 1} : x
            )
        );
    } else {
        setCartItems([...cartItems, {...product, qty: 1}]);
    }
};

const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 0){
        setCartItems(
            cartItems.filter((x) => x.id !== product.id)
        )
    } else {
         setCartItems(
              cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty -1 } : x
              )
         )
    }
}



    return (
        <div className={styles.container}>
            <div className={styles.container1}>
                <Header  
                   countCartItems={cartItems.length}
                />
            </div>
            <div className={styles.container2}>
                <div className={styles.containe21}>
                    <Main 
                        products={products}
                        onAdd={onAdd}
                    />
                </div>
                <div className={styles.containe22}>
                    <Basket 
                    onAdd={onAdd}
                    onRemove={onRemove}
                        cartItems={cartItems}
                    />
                </div>
            </div>
        </div>
    )
}
