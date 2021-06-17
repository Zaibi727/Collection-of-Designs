import React,  { useState } from 'react';
import Modal from 'react-modal';
import styles from './Modal.module.css';
import { ImCross } from "react-icons/im";
import { HiOutlineNewspaper } from "react-icons/hi";
import { BsTag } from "react-icons/bs";
import AbstarctInput from './AbstarctCard';
import SendButtonAbstract from './SendButtonAbstract';

export default function ModalContainer() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [radio,setRadio] = useState("one");

    const customStyles = {
        overlay: {
          backgroundColor: "gray"
        } 
      };


    return (
        <div className={styles.modalWrapper}>
            <button className={styles.openbtn} onClick={()=> setModalIsOpen(true)}>Open Modal</button>
            <Modal className={styles.modal} isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)} style={customStyles}>            
            <section className={styles.sec1}>
                       <img className={styles.img}  src="./images/profile.jpg" />
                        <h5>Morries Lane</h5>
                        <p><span><HiOutlineNewspaper /></span>  Classical manicure and pedicure</p>
                        <p><span><BsTag /></span> Complimentory</p>
          </section>
                   <section className={styles.sec2}>
                       <p className={styles.sec2header}>CONFIRM AVAILABILTIY DEC 25, 2019</p>
                       <div>
                            <div>
                                <AbstarctInput 
                                    label="12:00 - 15:00"
                                    checked={radio === "one"}
                                   value="one"
                                  onChange={(e)=>{setRadio(e.target.value)}} 

                                />
                            </div>
                            <div>
                                <AbstarctInput 
                                    label="12:00 - 15:00"
                                    checked={radio === "two"}
                                   value="two"
                                  onChange={(e)=>{setRadio(e.target.value)}} 
                                />
                            </div>
                            <div>
                                <AbstarctInput 
                                    label="12:00 - 15:00"
                                    checked={radio === "three"}
                                   value="three"
                                   onChange={(e)=>{setRadio(e.target.value)}} 

                                />
                            </div>
                       </div>
                       <SendButtonAbstract 
                         title="Send to review"
                     />
                   </section>
                   <button className={styles.closebtn} onClick={()=> setModalIsOpen(false)}>
                      <ImCross />
                  </button>
            </Modal>
        </div>
    )
}
