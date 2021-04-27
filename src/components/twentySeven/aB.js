
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

    const iconRight =  <AiOutlineEyeInvisible/>;


        return ( 
            <div className={styles.wrapper}>
                 <AbstractInput 
                    type="email" 
                    label="Email" 
                    value={this.state.email}
                    onChange={this.handleChange}
                    />

                 <AbstractInput 
                    type="password"  
                    label="Password" 
                    value={this.state.password}
                    onChange={this.handleChange}
                 />
            </div>
         );
    }
}
 
export default AB;