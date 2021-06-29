import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './ModalSlider.module.css';
import './modalss.css';

import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

function ModalDesign ({Content}) {
    const [isOpen, setIsOpen] = useState(false);
    const [current, setCurrent] = useState(0);

    const length = Content.length;




    const showModal = () => {
         setIsOpen(true);
      };
    
       const hideModal = () => {
        setIsOpen(false);
      };

      const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(Content) || Content.length <= 0) {
        return null;
    }


    return (
        <div>
        <button onClick={showModal}>Open Modal</button>
        <Modal  show={isOpen}   className={styles.modaal}> 
               
        <div className={styles.double}>
        <div>
            <button onClick={prevSlide} className={styles.arrow}><RiArrowLeftSLine size={35} /></button>
        </div>
          <div> 
                               
                {/*--close--btn---*/}
              {Content.map((content, id) => {
                  return(
                      <div className={id === current ? 'slide active' : 'slide'} key={id}>
                           {id === current && (
                               <div className={styles.designwrapper}>
                            <section className={styles.sec1}>
                       <img className={styles.mainPic} src={content.mainPic} />
                    </section>

                   

                    <section className={styles.sec2}>
                        <div className={styles.sec2Div1}>
                            <div className={styles.sec2div1Top}>
                            <img src={content.profilePic} />
         
                             <div>
                                   <p><span className={styles.profilename}>{content.profileName}</span><span>{content.dotIcon}</span><span className={styles.instaIcon}>{content.instaIcon}</span></p>
                                   <p className={styles.accountId}>{content.accountId}</p>          
                            </div> 
                            </div>   
                            <div>
                            <button onClick={()=> setIsOpen(false)} type="button" className={styles.issue} data-dismiss="modal" aria-label="Close">
                                   <span aria-hidden="true">&times;</span>
                           </button>
                            </div>
                        </div>
                        

                        <div className={styles.reactions}>
                            <div>
                                
                                <p className={styles.p2}>{content.impressions}</p>
                                <p className={styles.p1}>{content.impressionsTitle}</p>
                            </div>
                            <div>
                                
                                <p className={styles.p2}>{content.reach}</p>
                                <p  className={styles.p1}>{content.reachTitle}</p>
                            </div>
                            <div>
                              
                                <p className={styles.p2}>{content.likes}</p>
                                <p  className={styles.p1}>{content.likesTitle}</p>
                            </div>
                            <div>
                                
                                <p className={styles.p2}>{content.comments}</p>
                                <p  className={styles.p1}>{content.commentsTitle}</p>
                            </div>
                            <div>
                             
                                <p className={styles.p2}>{content.enRate}</p>
                                <p  className={styles.p1}>{content.engRateTitle}</p>
                            </div>
                        </div>

                        

                        <div className={styles.description}>
                            <p className={styles.descriptionTitle}>{content.descriptionTitle}</p>
                            <p className={styles.descriptionContent}>{content.descriptionContent}</p>
                        </div>

                        

                        <div className={styles.last}>
                             <div>
                                 <p className={styles.p2}>{content.mentionsTitle}</p>
                                 <p className={styles.p1}>{content.mentionsContent}</p>
                             </div>
                             <div>
                                 <p className={styles.p2}>{content.hashtagsTitle}</p>
                                 <p className={styles.p1}>{content.hashtagsContent}</p>
                             </div>
                             <div>
                                 <p className={styles.p2}>{content.locationTitle}</p>
                                 <p className={styles.p1}>{content.locationContent}</p>
                             </div>
                        </div>
                    </section>
                    </div>
                           )}
                      </div>
                  )
              })}
                    
           
         </div>
           
         <div>
             <button onClick={nextSlide} className={styles.arrow}>
             <RiArrowRightSLine size={35} />
             </button>
         </div>
         </div>
     </Modal>
  </div>
    ) 
}

export default ModalDesign;