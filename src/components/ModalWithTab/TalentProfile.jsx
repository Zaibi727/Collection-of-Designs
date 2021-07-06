import React, {useState} from 'react';
import styles from './modalwithtab.module.css';

import { AiOutlineStar } from "react-icons/ai";
import {AiOutlineShareAlt } from "react-icons/ai";
import { GoVerified } from "react-icons/go";

import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill  } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import PortfolioImages from './PortfolioImages';
import InstagramImages from './InstagramImages';

function TalentProfile() {
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
        instaIcon: <FaInstagram />,
        facebookIcon: <RiFacebookFill />,
        tiktok: <SiTiktok />,
        user: <FiUsers />,
        engagement: <AiOutlineShareAlt />,
        tableft: 'Portfolio',
        tabright: 'Instagram',
    });

    const [show, setShow] = useState(false);

    const tabOpen = () => {
        setShow(true);
    }
    const tabClose = () => {
        setShow(false);
    }


    return (
        <div className={styles.talentprofilewrapper}>
           <section className={styles.talentSec1}>
              <div className={styles.bottommargin}>
                 <p className={styles.boldhead}>{data.blogger}</p>
                 <p className={styles.headContent}>{data.bloggerDetial}</p>
              </div>
              <div className={styles.bottommargin}>
                 <p className={styles.boldhead}>{data.experience}</p>
                 <p className={styles.headContent}>{data.experienceDetial}</p>
              </div>
              <div className={styles.bottommargin}>
                 <p className={styles.boldhead}>{data.fashion}</p>
                 <p className={styles.headContent}>{data.fashionDetial}</p>
              </div>
              <div className={styles.bottommargin} className={styles.topdivbottomborder}>
                 <p className={styles.boldhead}>{data.interest}</p>
                 <p className={styles.headContent}>{data.interestDetial}</p>
              </div>
                        
                {/*--profession-experience-fashion--*/}
               <div className={styles.agegender}>
                  <div className={styles.bottommargin}>
                      <p className={styles.boldhead}>{data.ageLabel}</p>
                      <p className={styles.headContent}>{data.age}</p>
                  </div>
                   <div className={styles.bottommargin}>
                      <p className={styles.boldhead}>{data.genderLabel}</p>
                      <p className={styles.headContent}>{data.gender}</p>
                   </div>
              </div>
              <div className={styles.verfiedambassdor}>
                  <div className={styles.bottommargin}>
                      <p className={styles.boldhead}><span className={styles.blue}>{data.verifiedIcon}</span>{data.verified}</p>
                      <p className={styles.headContent}>{data.badge}</p>
                  </div>
                   <div className={styles.bottommargin}>
                      <p className={styles.boldhead}><sapn className={styles.green}>{data.verifiedIcon}</sapn>{data.ambassador}</p>
                   </div>
              </div>

              {/*--age-gender-verified-ambassdor--*/}
        </section>    

        <section className={styles.talentSec1}>
            <section className={styles.instagram}>
                <div className={styles.socialMedialDiv}>
                    <p className={styles.medianame}><span>{data.instaIcon}&nbsp;&nbsp;</span>Instagram</p>
                    <p className={styles.medialdetial}>@accountname</p>
                </div>
                <div className={styles.socialMedialDiv}>
                    <p className={styles.medianame}><span>{data.user}&nbsp;&nbsp;</span>Followers</p>
                    <p className={styles.medialdetial}>24.4k</p>
                </div>
                <div className={styles.socialMedialDiv}>
                    <p className={styles.medianame}><span>{data.engagement}&nbsp;&nbsp;</span>Engagment</p>
                    <p className={styles.medialdetial}>3.42%</p>
                </div>
            </section>
            {/*--instagram--*/}
            <section className={styles.facebook}>
                <div className={styles.socialMedialDiv}>
                    <p className={styles.medianame}><span>{data.facebookIcon}&nbsp;&nbsp;</span>Facebook</p>
                    <p className={styles.medialdetial}>@accountname</p>
                </div>
                <div className={styles.socialMedialDiv}>
                    <p className={styles.medianame}><span>{data.user}&nbsp;&nbsp;</span>Followers</p>
                    <p className={styles.medialdetial}>24.4k</p>
                </div>
                <div className={styles.socialMedialDiv}>
                    <p className={styles.medianame}><span>{data.engagement}&nbsp;&nbsp;</span>Engagment</p>
                    <p className={styles.medialdetial}>3.42%</p>
                </div>
            </section>
            {/*--facebook--*/}
            <section className={styles.tiktok}>
                <div className={styles.socialMedialDiv}>
                    <p className={styles.medianame}><span>{data.tiktok}&nbsp;&nbsp;</span>TikTok</p>
                    <p className={styles.medialdetial}>@accountname</p>
                </div>
                <div className={styles.socialMedialDiv}>
                    <p className={styles.medianame}><span>{data.user}&nbsp;&nbsp;</span>Followers</p>
                    <p className={styles.medialdetial}>4.4k</p>
                </div>
                <div className={styles.socialMedialDiv}>
                    <p className={styles.medianame}><span>{data.engagement}&nbsp;&nbsp;</span>Engagment</p>
                    <p className={styles.medialdetial}>3.42%</p>
                </div>
            </section>
            {/*--tiktok--*/}
        </section>    

        {/*--social-media--*/}

           <section className={styles.lastportion}>
                         <div className={styles.tabdivsecond}>
                             <p   style={ show ? {marginBottom: '0px', paddingBottom: '6px', color: 'rgb(153, 149, 149)', borderBottom: 'none'} : {marginBottom: '0px', paddingBottom: '6px', color: 'black', borderBottom: '2px solid black'}} className={styles.left} onClick={tabClose}>{data.tableft}</p>
                             <p   style={ show ? {marginBottom: '0px', paddingBottom: '6px', color: 'black', borderBottom: '2px solid black'} : {marginBottom: '0px', paddingBottom: '6px', color: 'rgb(153, 149, 149)', borderBottom: 'none'}} className={styles.right} onClick={tabOpen}>{data.tabright}</p>
                         </div>
                         <div style={{marginTop: '15px'}}>
                              <p style={ show ? { display: 'none'} : { display: 'block'}}><PortfolioImages /></p>
                              <p style={ show ? { display: 'block'} : { display: 'none'}}><InstagramImages /></p>
                         </div>
                          
           </section>        
        </div>
    )
}

export default TalentProfile;
