import React, {useState} from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import styles from './ValidationForm.module.css';


const FormContainer = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
     
    function submitForm(){
        setIsSubmitted(true);
    }

    return (
        <div className={styles.whole}>
            {!isSubmitted ? <FormSignup submitForm=
            {submitForm} /> : <FormSuccess />}
        </div>
    )
}

export default FormContainer
