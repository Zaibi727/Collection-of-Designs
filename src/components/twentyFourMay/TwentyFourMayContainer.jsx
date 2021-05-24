import React from 'react';
import styles from './twentyFourMay.module.css';
import AbstractRoundButton from './AbstractRoundButton';
import AbstractImages from './AbstractImages';
import AbstractFollowMessage from './AbstractFollowMessage';
import AbstractInput from './AbstractInput';


import { AiFillHeart} from "react-icons/ai";
import { AiFillEye} from "react-icons/ai";
import { BiPencil} from "react-icons/bi";
import { BsLink45Deg} from "react-icons/bs";
import { BsFillPlayFill} from "react-icons/bs";
import { FiDownload} from "react-icons/fi";
import { TiPlus } from "react-icons/ti";
import { FiMessageSquare } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";

export default function TwentyFourMayContainer(props) {
    return (
        <div className={styles.container}>
             <section className={styles.sec1}>
                     <div className={styles.socialIcon}>
                           <div  className={styles.a}><AbstractRoundButton Icon={AiFillHeart} /></div>
                           <div className={styles.b}><AbstractRoundButton Icon={AiFillEye} /></div>
                           <div className={styles.c}><AbstractRoundButton Icon={BiPencil} /></div>
                           <div className={styles.d}><AbstractRoundButton Icon={BsLink45Deg} /></div>
                           <div className={styles.e}><AbstractRoundButton Icon={BsFillPlayFill} /></div>
                           <div className={styles.f}><AbstractRoundButton Icon={FiDownload} /></div>
                     </div>
                     <div className={styles.sec1Card}>
                         <div>
                             <div className={styles.firstProfileImg}>
                                <AbstractImages 
                                  
                                  src='./images/profile.jpg'
                                />
                             </div>

                             <h4>Meagan Fisher</h4>
                             <p className={styles.engMang}>Engineering Manager</p>
                         </div>
                         <div className={styles.cardOneSecond}>
                             <AbstractFollowMessage type="dark" title="Follow" Icon={TiPlus} />
                             <AbstractFollowMessage type="light" title="Message" Icon={FiMessageSquare} />
                         </div>
                     </div>
             </section>

                {/*--leftCard--*/}

             <section className={styles.sec2}>
                 <div>
                       <img className={styles.bigImage} src="./images/lamp.jpg" />
                        <div className={styles.sec2Div1}>
                          <div className={styles.sec2Div1Sub}>
                             <div>
                                <AbstractImages   src='./images/profile.jpg' />
                             </div>
                            <h6 className={styles.meagen}>Meagen Fisher</h6>
                          </div>
                          <div><AbstractRoundButton type="light" Icon={AiFillHeart} /></div> 
                        </div>            
                 </div>

                 <div className={styles.sec2Div2}>
                         <div className={styles.sec2Div2Sub}>
                             <AbstractImages                         
                               src='./images/profile.jpg'
                              />
                             <div className={styles.three}>
                               <h6>John Doe</h6>
                               <p>UI/UX Designer</p>
                             </div>
                         </div>
                         <div><AbstractRoundButton type="light" Icon={BiPencil} /></div>               
                 </div>
             </section>

             {/*--center-card--*/}


             <section className={styles.sec3}>
                   
                      <div className={styles.sec3Div1}>
                          <h3>Login into your account</h3>
                          <p>Don't have an account yet? <bold>Create New</bold></p>
                      </div>
                      <form className={styles.form}>
                      <div>
                            <div className={styles.email}>
                              <AbstractInput 
                               type="email" 
                                placeholder='Johndoe@gmail.com'  
                                Icon={BiEnvelope}  
                               />
                            </div>
                            <div className={styles.password}>
                               <AbstractInput 
                                 type='password'
                                 placeholder="Password"
                                 Icon={AiFillEye}
                             />
                            </div>
                       </div>
                       <div className={styles.formDiv2}>
                           <AbstractFollowMessage  title="Login" />
                       </div>
                      </form>
                   
             </section>
        </div>
    )
}
