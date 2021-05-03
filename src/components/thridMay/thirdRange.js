import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import styles from './inputRange.module.css';
import styled from 'styled-components';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

class ThirdRange extends Component {
 
    constructor(props) {
        super(props);
     
        this.state = {
          value: { min: 0, max: 600 },
        };
      }
      


    render(props) { 
        return ( 
               <div className={styles.slider}>
               <RangeSliderContainer color="black" opacity="-1">
                     <InputRange
                    label=""
                     styles={{backgroundColor: 'black'}}
                        value={this.state.value}
                        onChange={value => this.setState({ value })}
                
                  />
                  <div className={styles.label}>
                    <label><span><FaAngleLeft /></span>160cm - 5'3"</label>
                    <label><span><FaAngleRight /></span>2mt - 6'5"</label>
                  </div>  
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
  .input-range__label-container{
      opacity: ${props => props.opacity}
  }
`;
