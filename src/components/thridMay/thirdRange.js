import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import styles from './inputRange.module.css';
import styled from 'styled-components';

class ThirdRange extends Component {
 
    constructor(props) {
        super(props);
     
        this.state = {
          value: { min: 700, max: 1000 },
        };
      }


    render() { 
        return ( 
               <div className={styles.slider}>
               <RangeSliderContainer color="black" fontSize="50px">
                     <InputRange
                     styles={{backgroundColor: 'black'}}
                        maxValue={1000}
                        minValue={0}
                        step={2}
                        formatLabel={value => `${value}.cm`}
                        value={this.state.value}
                        onChange={value => this.setState({ value })}
                
                  />
                  </RangeSliderContainer>
                </div>
         );
    }
}
 
export default ThirdRange;

const RangeSliderContainer = styled.div`
  .input-range__track--active,
  .input-range__slider {
    background: ${props => props.color}; 
    border-color: ${props => props.color};
  }
`;