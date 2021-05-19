import React, { Component } from 'react';
import styles from './ContactUs.module.css';
import AbstractContactInput from './AbstaractContactInput';
import AbstractTextArea from './abstractTextArea';
import AbstractButton from './abstarctButton';

class ContactUsContainer extends Component {

    render() { 
        return ( 
            <div className={styles.wrapper}>
                <form className={styles.form}>
                    <p className={styles.head}>Contact Us</p>
                    <section className={styles.sec1}>
                        <div>
                           <AbstractContactInput 
                               type="name"
                               id="fname"
                               placeholder="First Name"
                           />
                        </div>
                        <div>
                            <AbstractContactInput 
                                type="name"
                               id="lname"
                               placeholder="Last Name"
                            />
                        </div>
                    </section>    
                    <section className={styles.sec2}>
                        <div>
                            <AbstractContactInput 
                                type="text"
                               id="pnumber"
                               placeholder="Phone Number"
                            />
                        </div>
                        <div>
                            <AbstractContactInput 
                                type="email"
                               id="email"
                               placeholder="E-mail Address"
                            />
                        </div>
                    </section>

                        <div>
                            <AbstractTextArea
                                type="textarea"
                                id="textarea"
                                placeholder="Message"
                            />
                        </div>

                    <div>
                       <AbstractButton 
                        title="Send"
                       />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default ContactUsContainer;