import React, { Component } from 'react';
import styles from './ContactUs.module.css';
import AbstractContactInput from './AbstaractContactInput';
import AbstractTextArea from './abstractTextArea';
import AbstractButton from './abstarctButton';


const initialState = {
    fname: "",
    lname: "",
    phoneNumber: "",
    email: "",
    message: ""
}


class ContactUsContainer extends Component {


    state = initialState;
   
    handleChange = e =>{
        const isCheckbox = e.target.type === "checkbox";
        this.setState({
            [e.target.name]: isCheckbox
            ? e.target.checked
            : e.target.value
        });
    };


    render() { 
        return ( 
            <div className={styles.wrapper}>
                <form className={styles.form}>
                    <p className={styles.head}>Contact Us</p>
                    <section className={styles.sec1}>
                        <div>
                           <AbstractContactInput 
                               type="name"
                               name="fname"
                               value={this.state.fname}
                               id="fname"
                               placeholder="First Name"
                               onChange={this.handleChange}
                           />
                        </div>
                        <div>
                            <AbstractContactInput 
                                  type="name"
                               id="lname"
                               name="lname"
                               value={this.state.lname}
                               placeholder="Last Name"
                               onChange={this.handleChange}
                            />
                        </div>
                    </section>    
                    <section className={styles.sec2}>
                        <div>
                            <AbstractContactInput 
                                type="text"
                               id="pnumber"
                               name="phoneNumber"
                               value={this.state.phoneNumber}
                               placeholder="Phone Number"
                               onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <AbstractContactInput 
                                 type="email"
                               id="email"
                               name="email"
                               value={this.state.email}
                               placeholder="E-mail Address"
                               onChange={this.handleChange}
                            />
                        </div>
                    </section>

                        <div>
                            <AbstractTextArea
                             type="textarea"
                                id="textarea"
                                name="message"
                               value={this.state.message}
                                placeholder="Message"
                                onChange={this.handleChange}
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