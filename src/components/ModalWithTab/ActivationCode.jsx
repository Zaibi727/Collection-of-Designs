import React from 'react';
import ReactCodeInput from 'react-verification-code-input';
import styles from './modalwithtab.module.css';
import './codeinput.css';



function ActivationCode() {


    return (
        <div>
            <p className={styles.ActivationCodehead}>Activation code</p>
            <div>
              <ReactCodeInput 
              className={styles.reactCodeInput} 
              type='text' 
              fields={5} 
                  fieldWidth={201}
                  fieldHeight={21}
                  style={{margin: '10px'}}
              />
            </div>  
            <p className={styles.codebottom}> Check-in: Jun 12Ve 2021 at 12: 02 pm</p>
            
        </div>
    )
}

export default ActivationCode;
