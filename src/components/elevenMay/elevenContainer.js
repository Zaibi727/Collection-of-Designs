import React, { Component } from 'react';
import InputFieldAbstract from './InputFieldAbstract';
import { FaUser } from "react-icons/fa";
import { ImKey } from "react-icons/im";
import CheckInputAbstarct from './checkInputAbstarct';
import ButtonAbstract from './buttonAbstarct';
import styles from './eleven.module.css';


class ElevenContainer extends Component {

    render() { 

        return ( 
            <form className={styles.wrapper}>
                  <div>
                     <img className={styles.logo} src="./images/pinterest.svg"/>
                 </div>
            <div className={styles.wrapper2}>
                 
                <div className={styles.userNameDiv}>
                    <InputFieldAbstract 
                        type="text"
                        name="username"
                        placeholder="Username"
                        Icon={FaUser}
                    />
                </div>
                <div className={styles.passwordDiv}>
                    <InputFieldAbstract 
                        type="password"
                        name="password"
                        placeholder="password"
                        Icon={ImKey}
                    />
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
                         title="Login"
                     />
                </div>

                <div>
                    <p>Don't have an account? <span className={styles.span}><a href="#">Sign Up <br /> Forgot your password?</a></span></p>
                </div>
                </div>
            </form>

         );
    }
}
 
export default ElevenContainer;