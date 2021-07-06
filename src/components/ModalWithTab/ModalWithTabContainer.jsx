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

function ModalWithTabContainer() {
    const [isOpen, setIsOpen] = useState(true);
    const [data, setData] = useState({
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
              <div>
                 <section className={styles.leftcontent}>
                    <h5>
                    Will This Cold Go Away on Its Own?
Day 1
Days 2–3
Days 4–6
Days 7–10
Beyond
When to seek help
Is it flu?
We include products we think are useful for our readers. If you buy through links on this page, we may earn a small commission. Here’s our process.

Overview
The prevailing wisdom is that when you have a cold, it’s best to treat it at home. That’s because colds are caused by viruses, which can’t be treated with antibiotics. In fact, taking antibiotics when you have a viral infection may do more harm than good. It may actually increase your risk of getting an infection later that will be resistant to antibiotic treatment.

The common cold is an upper respiratory viral infection. It creates inflammation in the nose and throat. Symptoms include:

runny nose
sore throat
cough
watery eyes
sneezing
congestion
headaches
fatigue
low-grade fever
A typical cold will last about 10 days, with the body’s immune system eventually getting rid of the infection on its own. During the life of the cold, it can seem to actually get worse. Sometimes, complications may arise that require a doctor’s intervention.

So how do you know when to wait it out, when to seek medical care, or when to try other treatments? Here’s what to expect.

The first day
Symptoms
Symptoms of the common cold usually begin two to three days after initial infection. By the time you start feeling it, you’ve probably been contagious for two to three days.

On day one of symptoms, you’re likely to experience a little tickle in the back of your throat and find yourself reaching for tissues more often than usual. At this point, it may be difficult to determine whether you have the cold or the flu. Typically, the flu will cause more fatigue and body aches than a cold.

Treatment
Treating your symptoms as soon as you think you have a cold may help you recover faster than you normally would. Zinc may help shorten the duration of a cold. Taking zinc supplements as early as possible seems to increase your recovery speed.

An analysisTrusted Source of several studies found that compared to adults who didn’t take zinc, adults who took zinc as a lozenge, pill, or syrup at the beginning of their cold had their symptoms end two days earlier.

In addition to taking zinc, you can try these remedies at home:

Drink plenty of fluids.
Suck on cough drops or lozenges medicated with menthol or camphor.
Use a humidifier or vaporizer (or do hot steam showers) to clear sinus passages and ease sinus pressure.
Avoid alcoholic or caffeinated beverages. They increase the risk of dehydration.
Try saline nasal sprays to clear the nose and sinuses.
Try decongestants, particularly those that contain pseudoephedrine.
Get plenty of rest.
Consider taking one to two days off of work to stay home and sleep. Your body repairs best while it’s sleeping. Getting some extra rest early on may help your immune system better fight the virus. It also will protect your co-workers from catching the same virus.

Days 2–3
Symptoms
On the second and third days, you’re likely to have worse symptoms, such as a consistently runny nose and increased sore throat. You may also have a low-grade fever with a temperature less than 102°F. You may not feel much different than you did the first day if your at-home remedies are working. Keep up the fluids, rest, and zinc, and you may get away with only a few sniffles and coughs.

Treatment
Typically, you’re most contagious during this period, so practice good hand washing. Cover your mouth and nose when you sneeze and cough. Try to stay home from work if you can. Regularly disinfect surfaces such as countertops, phones, doorknobs, and computer keyboards.

Try these treatments to ease your symptoms:

Chicken soup: Mothers have used chicken soup for generations to help when family members feel ill. The warm liquid can soothe symptoms and it does seem to help relieve congestion by increasing the flow of mucus.

Rest: Make sure you get plenty of rest and take naps if you feel like it. Propping yourself up with pillows can lessen sinus congestion and allow you to sleep better.

Steam: To loosen congestion, sit over a bowl of hot water, place a towel over your head, and inhale the steam. A hot, steamy shower may also help. You can use a vaporizer or humidifier in your room to loosen congestion and help you sleep.

Throat soothers: Try hot beverages with honey to soothe throat pain, or gargle with warm salt water.

Antihistamines: Antihistamines may provide relief from cough, sneezing, watery eyes, and a runny nose. Try these options on Amazon.com.

Expectorants: For a cough, try an over-the-counter expectorant. An expectorant is a drug that brings up mucus and other material from the lungs.

Fever reducers: Pain relievers like acetaminophen and ibuprofen can help with fever and headaches. Do not give aspirin to children younger than 19 years. It has been associated with the risk of a rare but serious illness called Reye’s syndrome.

Cool washcloth: To get relief from a fever, try placing a cool washcloth on your forehead or behind your neck. You can also take a lukewarm shower or bath.

Mild exercise: If you feel well enough to exercise, moving may help boost your immune system. But make sure that you don’t overdo it! Intense activity can reduce your resistance to the infection. Try a brisk walk rather than an all-out run.
                    </h5>

                 </section>
             </div>
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