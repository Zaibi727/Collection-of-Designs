import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import styles from './inputRange.module.css';


class SecondRange extends Component {
 
    constructor(props) {
        super(props);
     
        this.state = {
          value: { min: 400, max: 1000 },
        };
      }


    render() { 
        return ( 
            <div className={styles.wrapper}>
            

               <section>
                    <InputRange
                        maxValue={1000}
                        minValue={0}
                        step={2}
                        formatLabel={value => `${value}.00`}
                        value={this.state.value}
                        onChange={value => this.setState({ value })}
                    />
               </section>

            </div>
         );
    }
}
 
export default SecondRange;