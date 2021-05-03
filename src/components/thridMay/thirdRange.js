import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import styles from './inputRange.module.css';


class ThirdRange extends Component {
 
    constructor(props) {
        super(props);
     
        this.state = {
          value: { min: 400, max: 1000 },
        };
      }


    render() { 
        return ( 
               <div className={styles.slider}>
                     <InputRange
                     styles={{backgroundColor: 'black'}}
                        maxValue={1000}
                        minValue={0}
                        step={2}
                        formatLabel={value => `${value}.cm`}
                        value={this.state.value}
                        onChange={value => this.setState({ value })}
                  />
                </div>
         );
    }
}
 
export default ThirdRange;