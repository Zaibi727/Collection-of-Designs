import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Basket from './Basket';
import TopHeader from './TopHeader';
import data from './data';
import styles from './boardwalk.module.css';

export default function BoardWalkContainer() {
    const [cartItems, setCartItems] = useState([]);
   const {products} = data;


   const onAdd = (product) =>{
       const exist = cartItems.find((x) => x.id === product.id);

       if(exist){
           setCartItems(
               cartItems.map((x) => 
               x.id === product.id ? {...exist, qty: exist.qty + 1} : x
               )
           )
       }else {
           setCartItems(
               [...cartItems, {...product, qty: 1}]
           )
       }
   }

   const onRemove = (product) => {
       const exist = cartItems.find((x)=> x.id === product.id);
       if(exist.qty === 0){
           setCartItems(
               cartItems.filter((x) =>
                x.id !== product.id
               )
           )
       }else{
           setCartItems(
               cartItems.map((x) => 
               x.id === product.id ? {...exist, qty: exist.qty - 1} : x
               )
           )
       }
   }

    return (
    <div>
        <TopHeader />
            <div className={styles.containerWrapper}>
            <div>
                <Header />
                <Main 
                    products={products}
                    onAdd={onAdd}
                />
            </div>
            <div>
                <Basket 
                    cartItems={cartItems}
                    onAdd={onAdd}
                    onRemove={onRemove}
                />
            </div>
        </div>
    </div>

    )
}
