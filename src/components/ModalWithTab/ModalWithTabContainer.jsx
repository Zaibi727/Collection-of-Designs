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

import { AiOutlineStar } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import TalentProfile from './TalentProfile';

function ModalWithTabContainer() {
    const [isOpen, setIsOpen] = useState(true);
    const [data, setData] = useState({
        blogger: 'Blogger',
        bloggerDetial: 'Profession',
        experience: 'Content Creator, Model, Singer',
        experienceDetial: 'Further expertise',
        fashion: 'Fashion',
        fashionDetial: 'Main Speciality',
        interest: 'Art & Design, Gaming, Health & Well..',
        interestDetial: 'Additional Interests',
        ageLabel: '23 y.o.',
        age: 'age',
        genderLabel: 'Female',
        gender: 'Gender',
        verified: 'Verified',
        verifiedIcon: <GoVerified />,
        badge: 'Badges',
        ambassador: 'Ambassador',
        mainimage: './images/eight4.jpg',
        name: "Arlene Steward",
        location: 'United States',
        tableft: 'Talent profile',
        tabright: 'Booking info',
        offerhead: 'Selected offer',
        brandimage: './images/eight4.jpg',
        brandname: 'Hair style & blow',
        discount: '15%',
        starIcon: <AiOutlineStar />,
        rating: '4.3',
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
                     <div className={styles.ratingdiv}>
                        <span className={styles.span1}>{data.starIcon}</span><span className={styles.span2}>{data.rating}</span>
                     </div>
                     <button onClick={hideModal} type="button" className={styles.closeModal} data-dismiss="modal" aria-label="Close">
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
                     <section className={styles.sec2}>
                     <div className={styles.tabdiv}>
                             <p   style={ show ? {marginBottom: '0px', paddingBottom: '6px', color: 'rgb(153, 149, 149)', borderBottom: 'none'} : {marginBottom: '0px', paddingBottom: '6px', color: 'black', borderBottom: '2px solid black'}} className={styles.left} onClick={tabClose}>{data.tableft}</p>
                             <p style={ show ? {marginBottom: '0px', paddingBottom: '6px', color: 'black', borderBottom: '2px solid black'} : {marginBottom: '0px', paddingBottom: '6px', color: 'rgb(153, 149, 149)', borderBottom: 'none'}} className={styles.right} onClick={tabOpen}>{data.tabright}</p>
                         </div>
                     </section>
                     <section className={styles.sec3}>                          
                                {/*--talent-profiletab--*/}
                                  <p style={ show ? { display: 'none'} : { display: 'block'}}><TalentProfile /></p>
                                  <p style={ show ? { display: 'block'} : { display: 'none'}}><ActivationCode /></p> 
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