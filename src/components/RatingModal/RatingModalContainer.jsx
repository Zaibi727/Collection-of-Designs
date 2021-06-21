import React from 'react';
import RatingStars from './RatingStars';
import DoneButton from './DoneButton';
import ImageName from './ImageName';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImCross } from "react-icons/im";
import styles from './ratingmodal.module.css';

export default function RatingModalContainer() {
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
      };
      const hideModal = () => {
       setIsOpen(false);
      };

    return (
        <div>
             <button className={styles.openbtn}  onClick={showModal}>Rating Modal</button>
             <Modal className={styles.modii} show={isOpen} >
                <button type="button" className={styles.issue} data-dismiss="modal" aria-label="Close" onClick={hideModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
                 <section className={styles.sec1}>
                     <ImageName 
                          src="./images/profile.jpg"
                         name="Andrea Williams"
                     />
                 </section>
                 <section className={styles.sec2}>
                    <p>
                        Please rate your experience<br></br> with the talent
                    </p>
                   <RatingStars />
                   <div>
                     <DoneButton 
                         title="Done"
                     />
                   </div>
                 </section>
                
             </Modal>
           
            
        </div>
    )
}
