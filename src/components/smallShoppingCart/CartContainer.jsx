import {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Basket from './Basket';
import data from './data';
import styles from './cart.module.css';


function CartContainer() {
    const {products} = data;
    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if(exist) {
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
  if(exist === 1){
       setCartItems(cartItems.filter((x) => x.id !== product.id));
  } else {
      setCartItems(
          cartItems.map((x) => 
          x.id === product.id ? {...exist, qty: exist.qty - 1} : x
          )
      )
  }


    }




        return ( 
            <div>
               <div>
                  <Header countCartItems={cartItems.length}></Header>
               </div>
               <div className={styles.mainBasket}>
                  <div  className={styles.app1}>
                  <Main
                     onAdd={onAdd}
                    products={products}
                  ></Main>
                  </div>
                  <div className={styles.app2}>
                  <Basket 
                     onAdd={onAdd}
                     onRemove={onRemove}
                     cartItems={cartItems}>

                     </Basket>
                  </div>
               </div>
        
            </div>
         );
    }
 
export default CartContainer;