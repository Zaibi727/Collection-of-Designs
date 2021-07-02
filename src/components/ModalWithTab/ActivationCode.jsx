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
                  fieldWidth={20}
                  fieldHeight={20}
                  style={{margin: '10px'}}
              />
            </div>  
            <p className={styles.codebottom}> Check-in: Jun 12Ve 2021 at 12: 02 pm</p>
             <p className={styles.text}>
                This offer allows you to receive from our local bussines partner a discount on the final bill as a member of the SQUARE community
             </p>
             <p className={styles.text}>
                This offer allows you to receive from our local bussines partner a discount on the final bill as a member of the SQUARE community
             </p>
             <p className={styles.text}>
                This offer allows you to receive from our local bussines partner a discount on the final bill as a member of the SQUARE community
             </p>
             <p className={styles.text}>
                This offer allows you to receive from our local bussines partner a discount on the final bill as a member of the SQUARE community
             </p>
             <p className={styles.text}>
                This offer allows you to receive from our local bussines partner a discount on the final bill as a member of the SQUARE community
             </p>
             <p className={styles.text}>
                This offer allows you to receive from our local bussines partner a discount on the final bill as a member of the SQUARE community
             </p>
             <p className={styles.text}>
                This offer allows you to receive from our local bussines partner a discount on the final bill as a member of the SQUARE community
             </p>
             <p className={styles.text}>
                This offer allows you to receive from our local bussines partner a discount on the final bill as a member of the SQUARE community
             </p>
        </div>
    )
}

export default ActivationCode;
