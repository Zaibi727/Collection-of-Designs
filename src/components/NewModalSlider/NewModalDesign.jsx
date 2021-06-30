import React, {useState} from 'react';
import Modal from 'react-modal';
import styles from './NewModal.module.css';


import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

import ReactPlayer from 'react-player'


function NewModalDesign({Content}) {
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
     }

      const prevSlide = () => {
          setCurrent(current === 0 ? length - 1 : current - 1);
      }

      if(!Array.isArray(Content) || Content.length <= 0){
          return null
      }

      const customStyles = {
        overlay: {
          backgroundColor: "rgb(0, 0, 0 , 0.7 )",
        }, 
      };


    return (
        <div>
            <h2>Modal Design</h2>
              <button onClick={showModal}>open Modal</button>
              <Modal isOpen={isOpen} style={customStyles} className={styles.modal}>
                  <div className={styles.modalContentWrapper}>
                        <div>
                            <button className={styles.arrow} onClick={prevSlide}><RiArrowLeftSLine size={30} /></button>
                        </div>

                        {/*--left-btn--*/}

                        <div>
                            {Content.map((content, id) => {
                                return(
                                    <div className={id === current ? 'slide active' : 'slide'} key={id}>
                                        {id === current && (
                                            <div className={styles.centerContent}>
                                                <section className={styles.sectionTop}>
                                                    <div className={styles.sectionTopDivOne}>
                                                         <img src={content.profilePic} />
                                                         <div>
                                                              <p><span className={styles.profilename}>{content.profileName}</span><span className={styles.dot}>{content.dotIcon}</span><span className={styles.instaIcon}>{content.instaIcon}</span></p>
                                                              <p className={styles.accountId}>{content.accountId}</p>          
                                                         </div> 
                                                    </div>
                                                    <div>
                                                       <button onClick={()=> setIsOpen(false)} type="button" className={styles.issue} data-dismiss="modal" aria-label="Close">
                                                          <span aria-hidden="true">&times;</span>
                                                       </button>
                                                    </div>
                                                </section>


                                                <section className={styles.sectionMid}>
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
                                                       <p className={styles.p2}>{content.enRate}</p>
                                                       <p  className={styles.p1}>{content.engRateTitle}</p>
                                                    </div>
                                                </section>
                                                <section className={styles.sectionBottom}>
                                                   <ReactPlayer 
                                                   className={styles.reactPlayer}
                                                    url={content.mainVideo} 
                                                    light ={content.mainVideo}
                                                    playing={true}
                                                    controls={true}
                                                   />
                                                </section>
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>

                        {/*--main-content-of-modal---*/}

                        <div>
                            <button className={styles.arrow} onClick={nextSlide}><RiArrowRightSLine size={30} /></button>
                        </div>
                  </div>
              </Modal>
        </div>
    )
}

export default NewModalDesign;
