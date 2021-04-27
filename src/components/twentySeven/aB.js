
import React, { Component } from 'react';
import AbstractInput from './abstractInput';
import styles from './abstract.module.css';
import { AiOutlineEyeInvisible } from 'react-icons/ai';


class AB extends Component {
    state = {
   value: ''
                
       }
     
       handleChange = (event) => {
        this.setState({value: event.target.value});
      }



    render() { 


        return ( 
            <div className={styles.wrapper}>
                 <AbstractInput 
                    type1="email" 
                    label1="Email"
                    value1={this.state.email}
                    onChange={this.handleChange}
                    type2="password"  
                    label2="Password" 
                    value2={this.state.password}
                    Icon= {AiOutlineEyeInvisible}
                    />
            </div>
         );
    }
}
 
export default AB;