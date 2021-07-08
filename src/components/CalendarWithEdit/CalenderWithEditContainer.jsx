import React,{useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import styles from './calendaredit.module.css';
import './calendaredit.css';
import Okbutton from './Okbutton';

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImCross } from "react-icons/im";

import CalenderEdit from './CalenderEdit';
import AllDay from './AllDay';


export default function CalenderWithEditContainer() {
    const [isOpen, setIsOpen] = React.useState(true);
    const [ selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption, e) => {
        setSelectedOption({ selectedOption: selectedOption });
        console.log(`Option selected:`, selectedOption);
      };

    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };


    return (
        <div className={styles.container}>
              <button className={styles.openbtn} onClick={showModal}>Calendar Modal</button>
           <Modal className={styles.modii} show={isOpen} onHide={hideModal}>
             <div className={styles.ggg}>
             <div className={styles.sec1}>
                <button type="button" className={styles.issue} data-dismiss="modal" aria-label="Close" onClick={hideModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
                <p>Manage calendar</p>
            </div>
           <div>
               <div className={styles.calederDiv}>
                    <CalenderEdit />
                  </div>
                  <div>
                      <AllDay />
                  </div>
                  <div className={styles.okwraper}>
                      <Okbutton />
                  </div>
              </div>
              </div>
           </Modal>
        </div>
    )
}