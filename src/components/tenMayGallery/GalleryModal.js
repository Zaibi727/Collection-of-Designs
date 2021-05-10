import React,{useState} from 'react';
import Modal from 'react-modal';
import Carousel from 'react-images';
import { Images } from './pics';
import styles from './tenMay.module.css';
 


function GalleryModal () {
    const [currentImage, setCurrentImage] = useState(1);
    const [modalIsOpen, setModalIsOpen] = useState(true);
    return(
        <div className={styles.tenMay}>
            <Modal className={styles.modal} isOpen={modalIsOpen}>
            <div className={styles.header}>
                <div className={styles.headerDiv1}>
                    <img src="./images/profile.jpg" />
                    <div className={styles.headerDiv1sub}>
                        <p className={styles.p1}>Tommothy Steward</p>
                        <p className={styles.p2}>@vluebear</p>
                    </div>
                </div>
                
                <div>
                    <p className={styles.p1}>May 10, 2020</p>
                    <p id={styles.p2} className={styles.p2}>2:04 pm</p>
                </div>
            </div>

            <div className={styles.carsoalDiv}>
                <Carousel 
                currentIndex={currentImage}
                views={Images}
                />
            </div>

            <div className={styles.buttonDiv}>
                <button className={styles.btn1}>Reject</button>
                <button className={styles.btn2}>Approved</button>
            </div>

            </Modal>
        </div>
    )
}
export default GalleryModal;