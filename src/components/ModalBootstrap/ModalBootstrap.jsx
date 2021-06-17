import React from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImCross } from "react-icons/im";
import styles from './Modal.module.css';

import { HiOutlineNewspaper } from "react-icons/hi";
import { BsTag } from "react-icons/bs";
import AbstarctInput from './AbstarctCard';
import SendButtonAbstract from './SendButtonAbstract';



export default function ModalBootstrap() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [radio,setRadio] = React.useState("one");

    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };


    return (
      <>
      <button className={styles.openbtn} onClick={showModal}>Display Modal</button>
      <Modal className={styles.modii} show={isOpen} onHide={hideModal}>
          <div>
                 <button type="button" class="close  m-3" data-dismiss="modal" aria-label="Close" onClick={hideModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
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
          </div>
      </Modal>
      </>
    )
}
