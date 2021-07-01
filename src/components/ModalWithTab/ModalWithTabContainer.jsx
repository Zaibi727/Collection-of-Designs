import React, {useState} from 'react';
import Modal from 'react-modal';
import styles from './modalwithtab.module.css';
import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill  } from "react-icons/ri";

import { SiTiktok } from "react-icons/si";
import { FaYelp } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPinterest } from "react-icons/fa";

import RejectApprove from './RejectApprove';
import SocialIconsButton from './socialIconsButton';
import ActivationCode from './ActivationCode';

function ModalWithTabContainer() {
    const [isOpen, setIsOpen] = useState(true);
    const [data, setData] = useState({
        mainimage: './images/eight5.jpg',
        name: "Arlene Steward",
        location: 'United States',
        tableft: 'Talent profile',
        tabright: 'Booking info',
        offerhead: 'Selected offer',
        brandimage: './images/eight4.jpg',
        brandname: 'Hair style & blow',
        discount: '15%',
        text: "This offer allows you to receive from our local bussines partner a discount on the final bill as a member of the SQUARE community",
    });

    const [show, setShow] = useState(false);

    const tabOpen = () => {
        setShow(true);
    }
    const tabClose = () => {
        setShow(false);
    }

    const showModal = () => {
        setIsOpen(true);
     };

     const hideModal = () => {
        setIsOpen(false);
     };

     const customStyles = {
        overlay: {
          backgroundColor: "rgb(0, 0, 0 , 0.7 )",
        }, 
      };

    return (
        <div>
            <h4>new task with some complexiety</h4>
               <button onClick={showModal}>open modal</button>
             <Modal className={styles.mmm} isOpen={isOpen}  style={customStyles}>
                 
                 <div className={styles.contentCover}>
                 <button onClick={hideModal} className={styles.closeModal}>
                    <span aria-hidden="true">&times;</span>
                 </button>
                     <section>
                         <img src={data.mainimage} className={styles.mainPic} />
                         <div className={styles.nameloc}>
                             <p className={styles.name}>{data.name}</p>
                             <p className={styles.location}>{data.location}</p>
                         </div>
                         <div className={styles.socialdiv}>
                             <SocialIconsButton Icon={FaInstagram} />
                             <SocialIconsButton Icon={RiFacebookFill} />
                             <SocialIconsButton Icon={SiTiktok} />
                             <SocialIconsButton Icon={FaYelp} />
                             <SocialIconsButton Icon={FaPinterest} />
                             <SocialIconsButton Icon={MdKeyboardArrowDown} />
                         </div>
                     </section>
                     {/*--top-section--*/}

                     <section className={styles.sec2}>
                         <div className={styles.tabdiv}>
                         <p   style={ show ? {marginBottom: '0px', paddingBottom: '10px', borderBottom: 'none', color: 'rgb(153, 149, 149)'} : {marginBottom: '0px', paddingBottom: '10px', borderBottom: '2px solid black', color: 'black'}} className={styles.left} onClick={tabClose}>{data.tableft}</p>
                             <p style={ show ? {marginBottom: '0px', paddingBottom: '10px', borderBottom: '2px solid black', color: 'black'} : {marginBottom: '0px', paddingBottom: '10px', borderBottom: 'none', color: 'rgb(153, 149, 149)'}} className={styles.right} onClick={tabOpen}>{data.tabright}</p>
                         </div>
                     </section>
                     <section className={styles.sec3}>
                           <p className={styles.heading}>{data.offerhead}</p>  
                           <div className={styles.brandDiv}>
                               <img className={styles.brandimage} src={data.brandimage} />
                               <div>
                                   <p className={styles.brandname}>{data.brandname}</p>
                                   <p className={styles.discount}>Discount: <span className={styles.dicountcount}>{data.discount}</span></p>
                               </div>
                           </div>
                           <p style={ show ? { borderBottom: 'none'} : { borderBottom: '1px solid lightgray'}} className={styles.text}>{data.text}</p>
                                                   
                           {show ? <ActivationCode /> : null}

                          <div className={styles.bottombtns}>
                                <RejectApprove type="light" title="Reject" />
                                <RejectApprove type="dark" title="Approve" />
                          </div>
                     </section>
                 </div>
             </Modal>

        </div>
    )
}

export default ModalWithTabContainer;