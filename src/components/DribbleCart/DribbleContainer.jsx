import React, { useState } from 'react';
import Main from './Main';
import data from './data';



export default function DribbleContainer() {
    const {products} = data;
    const [cartItems, setCartItems] = useState([]);

const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist){
        setCartItems(
            cartItems.map((x) => 
            x.id === product.id ? {...exist, qty: exist.qty + 1} : x
            )
        )
    } else {
       setCartItems(
        [...cartItems, {...product, qty: 1}]
       )
    }
}

const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 0){
        setCartItems(
            cartItems.filter((x)=>
                x.id !== product.id
            )
        )
    } else {
      setCartItems(
          cartItems.map((x) => (
          x.id === product.id ? {...exist, qty: exist.qty - 1}: x
          ))
      )
    }
 }



    return (
        <div>
            <Main 
                products={products}
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
            />
        </div>
    )
}
