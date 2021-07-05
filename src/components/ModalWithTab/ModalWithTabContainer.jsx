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
        mainimage: './images/eight3.jpg',
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

     const hideModal = () => {
        setIsOpen(true);
     };


    return (
        <div className={styles.cover}>
             <div className={styles.card}>
                     <div className={styles.scrollableportion}>
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
                     <section className={styles.sec2}>
                         <div className={styles.tabdiv}>
                             <p   style={ show ? {marginBottom: '0px', paddingBottom: '6px', borderBottom: 'none', color: 'rgb(153, 149, 149)'} : {marginBottom: '0px', paddingBottom: '6px', borderBottom: '2px solid black', color: 'black'}} className={styles.left} onClick={tabClose}>{data.tableft}</p>
                             <p style={ show ? {marginBottom: '0px', paddingBottom: '6px', borderBottom: '2px solid black', color: 'black'} : {marginBottom: '0px', paddingBottom: '6px', borderBottom: 'none', color: 'rgb(153, 149, 149)'}} className={styles.right} onClick={tabOpen}>{data.tabright}</p>
                         </div>
                     </section>
                     <section className={styles.sec3}>
                           <p className={styles.heading}>{data.offerhead}</p>  
                           <div className={styles.brandDiv}>
                               <img className={styles.brandimage} src={data.brandimage}  />
                               <div>
                                   <p className={styles.brandname}>{data.brandname}</p>
                                   <p className={styles.discount}>Discount: <span className={styles.dicountcount}>{data.discount}</span></p>
                               </div>
                           </div>
                           <div style={ show ? { borderBottom: 'none'} : { borderBottom: '1px solid lightgray'}}>                   
                                 <p className={styles.text}>{data.text}</p>
                                 <p style={ show ? { display: 'block'} : { display: 'none'}}><ActivationCode /></p>
                              </div> 
                     </section>
                     </div>
                     <div className={styles.bottombtns}>
                                <div className={styles.btns}>
                                   <RejectApprove type="light" title="Reject" />
                                   <RejectApprove type="dark" title="Approve" />
                                </div>
                     </div>
             </div>
        </div>
             
    )
}

export default ModalWithTabContainer;