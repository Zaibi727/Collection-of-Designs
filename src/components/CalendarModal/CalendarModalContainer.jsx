import React,{useState} from 'react';
import CalendarAb from './Calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './calendarmodal.module.css';
import Okbutton from './Okbutton';

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImCross } from "react-icons/im";
import './reactCalendar.css';

export default function CalendarModalContainer() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [radio,setRadio] = React.useState("one");

    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };


    return (
        <div>
              <button className={styles.openbtn} onClick={showModal}>Calendar Modal</button>
           <Modal className={styles.modii} show={isOpen} onHide={hideModal}>
             <div className={styles.sec1}>
                <button type="button" className={styles.issue} data-dismiss="modal" aria-label="Close" onClick={hideModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
                <p>Select date</p>
                <div>
                <CalendarAb />
               </div>
            </div>
             <div className={styles.sec2}>
               <Okbutton />
            </div>
           </Modal>
        </div>
    )
}
