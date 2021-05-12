import React, { Component } from 'react';
import InputFieldAbstract from './InputFieldAbstract';
import { FaUser } from "react-icons/fa";
import { ImKey } from "react-icons/im";
import CheckInputAbstarct from './checkInputAbstarct';
import ButtonAbstract from './buttonAbstarct';
import styles from './eleven.module.css';


const initialState = {
    name: "",
    password: "",
    nameError: "",
    passwordError: ""
}

class ElevenContainer extends Component {

    state = initialState;
   
    handleChange = e =>{
        const isCheckbox = e.target.type === "checkbox";
        this.setState({
            [e.target.name]: isCheckbox
            ? e.target.checked
            : e.target.value
        });
    };


    validate = () => {
        let nameError = "";
        let passwordError = "";
       
        if(this.state.password < 5) {
            passwordError = "password must be included 8 characters";
        }   

        if(!this.state.name) {
            nameError = "name cannot be blank";
        }


        if ( nameError || passwordError) {
            this.setState({ nameError, passwordError});
            return false;
        }
        return true;
     }

     handleSubmit = e => {
         e.preventDefault();
         const isValid = this.validate();
         if(isValid) {
             console.log(this.state);
             //clear form
             this.setState(initialState);
         }
     };



    render() { 

        return ( 
            <form className={styles.wrapper} onSubmit={this.handleSubmit}>
                  <div>
                     <img className={styles.logo} src="./images/pinterest.svg"/>
                 </div>
            <div className={styles.wrapper2}>
                 
                <div className={styles.userNameDiv}>
                    <InputFieldAbstract 
                        type="text"
                        name="name"
                        value={this.state.name}
                        placeholder="Username"
                        Icon={FaUser}
                        onChange={this.handleChange}
                    />
                     <div style={{fontSize:12, color: "red"}}>
                         {this.state.nameError}
                    </div>
                </div>
                <div className={styles.passwordDiv}>
                    <InputFieldAbstract 
                        type="password"
                        name="password"
                        value={this.state.password}
                        placeholder="password"
                        Icon={ImKey}
                        onChange={this.handleChange}
                    />
                      <div style={{fontSize:12, color: "red"}}>
                         {this.state.passwordError}
                    </div>
                </div>
                <div className={styles.checkboxDiv}>
                    <CheckInputAbstarct 
                        type="checkbox"
                        id="checkbox1"
                        label="Remember me"
                    />
                </div>
                <div className={styles.loginBtnDiv}>
                     <ButtonAbstract 
                         type="submit"
                         title="Login"
                     />
                </div>

                <div>
                    <p>Don't have an account? <span className={styles.span}><a className={styles.a} href="#">Sign Up <br /> Forgot your password?</a></span></p>
                </div>
                </div>
            </form>

         );
    }
}
 
export default ElevenContainer;