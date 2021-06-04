import React from 'react';
import styles from './juneThree.module.css';
import {Link} from 'react-router-dom';
import sideItems from './sidedata';

class Product extends React.Component {


    render(){
      return (
           <div className={styles.product}>
              {sideItems.map((item) => (
             <ul className={styles.ul} key={item.itemid}>
                   <Link className={styles.link} to={`/product/${item.itemid}`}>
                         <li><span>{item.Icon}</span>{item.label}</li>  
                    </Link>
                    <li>
                        {item.content.map((c) => (
                         <ul>
                              <li>{c.label}<span>{c.Icon2}</span></li>
                         </ul>
                         ))}
             </li>
              </ul>
        ))}
          </div> 
     );
}
}

export default Product;


