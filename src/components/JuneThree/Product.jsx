import React from 'react';
import styles from './juneThree.module.css';
import sideItems from './sidedata';
import {Link} from 'react-router-dom';


class Product extends React.Component {


  render(){   

      return (
        <div className={styles.product}>
        {sideItems.map((item, Icon, content) => (
             <ul className={styles.ul} key={item.itemid}>
             <Link className={styles.link} to={`/product/${item.itemid}`}>
               <li><span>{item.Icon}</span>{item.label}</li>  
             </Link>
              </ul>
        ))}
        </div>
     );
}
}

export default Product;


