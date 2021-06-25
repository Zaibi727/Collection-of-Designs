import React from 'react';
import UseForm from './UseForm';
import ValidationInfo from './ValidationInfo';
import styles from './ValidationForm.module.css';

const FormSignup = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = UseForm(submitForm,ValidationInfo);
    return (
        <div className={styles.signupcontainer}>
        <form onSubmit={handleSubmit}>
            <h4>
                Learning Phase with Ultra Passion
            </h4>
            <div className={styles.formInputs}>
                <label  for="username">Username</label><br />
                <input 
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    value={values.username}
                    onChange={handleChange}
                />
                {errors.username && <p>{errors.username}</p>}
            </div>

            <div className={styles.formInputs}>
                <label  for="email">Email</label><br />
                <input 
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>

            <div className={styles.formInputs}>
                <label  for="password">Password</label><br />
                <input 
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                    value={values.password}
                    onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
            </div>

            <div className={styles.formInputs}>
                <label  for="password">Confirm Password</label><br />
                <input 
                    id="password2"
                    type="password"
                    name="password2"
                    placeholder="Confirm your Password"
                    value={values.password2}
                    onChange={handleChange}
                />
                {errors.password2 && <p>{errors.password2}</p>}
            </div>
               <button type="submit">
                   Sign Up
               </button><br />
               <span>
                   Already have an account? Login <a href="#">here</a>
               </span>
        </form>     
        </div>
    )
}

export default FormSignup;
