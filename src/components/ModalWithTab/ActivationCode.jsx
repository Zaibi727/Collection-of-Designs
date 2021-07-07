import React,{useState} from 'react';
import ReactCodeInput from 'react-verification-code-input';
import styles from './modalwithtab.module.css';
import './codeinput.css';



function ActivationCode() {
   const [data, setData] = useState({
      location: 'United States',
      tableft: 'Talent profile',
      tabright: 'Booking info',
      offerhead: 'Selected offer',
      brandimage: './images/eight4.jpg',
      brandname: 'Hair style & blow',
      discount: '15%',
      text: "This offer allows you to receive from our local bussines partner a discount on the final bill as a member of the SQUARE community",
  });


    return (
        <div>
             <p className={styles.heading}>{data.offerhead}</p>
             <div className={styles.brandDiv}>
                <img className={styles.brandimage} src={data.brandimage}/>
                <div>
                   <p className={styles.brandname}>{data.brandname}</p>
                   <p className={styles.discount}>Discount: <span className={styles.dicountcount}>{data.discount}</span></p>
                </div> 
             </div>
            <p className={styles.text}>
               {data.text}
             </p>
            <p className={styles.ActivationCodehead}>Activation code</p>
            <div className={styles.inputbox}>
              <ReactCodeInput 
              className={styles.reactCodeInput} 
              type='text' 
              fields={5} 
                  fieldWidth={28}
                  fieldHeight={28}
              />
            </div>  
            <p className={styles.codebottom}> Check-in: Jun 12Ve 2021 at 12: 02 pm</p>
        </div>
    )
}

export default ActivationCode;
