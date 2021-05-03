import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import styles from './inputRange.module.css';
import FirstRange from './firstRange';
import SecondRange from './secondRange';
import ThirdRange from './thirdRange';


class Range extends Component {
 
    constructor(props) {
        super(props);
     
        this.state = {
          value: { min: 400, max: 1000 },
        };
      }


    render() { 
        return ( 
            <div className={styles.wrapper}>
            
            <FirstRange />
            <SecondRange />
            <ThirdRange />
              
            </div>
         );
    }
}
 
export default Range;