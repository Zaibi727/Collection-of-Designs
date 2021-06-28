import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './ModalSlider.module.css';
import './modalss.css';




class ModalDesign extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
          index: 1,
          disabledNext: false,
          disabledPrev: false,

        }
      }

   

      onPrevious(e) {
        let index = this.state.index - 1
        let disabledPrev = false
        if (index <= 0) {
          e.preventDefault()
          index = 0
          disabledPrev = true
        }
    
        this.setState({ index: index, disabledPrev: disabledPrev, disabledNext: false })
      }
    
      onNext(e) {
        let index = this.state.index + 1
        let disabledNext = false
        if (index === this.props.content.length - 1) {
          e.preventDefault()
          index = this.props.content.length - 1
          disabledNext = true
        }
    
        this.setState({ index: index, disabledNext: disabledNext, disabledPrev: false })
      }

     

   render(){
    return (
        <div style={this.props.customStyles}>
        <Modal  className={styles.modaal} show={this.props.isOpen} onHide={this.props.hideModal}> 
        <div className={styles.double}>
        <div>
            <button onClick={this.onPrevious.bind(this)}  className={styles.arrow}>{this.props.content.previousArrow}</button>
        </div>
          <div className={styles.designwrapper}> 
                              <button type="button" className={styles.issue} data-dismiss="modal" aria-label="Close" onClick={this.props.hideModal}>
                                   <span aria-hidden="true">&times;</span>
                                 </button>
                {/*--close--btn---*/}
              
                    <section className={styles.sec1}>
                       <img className={styles.mainPic} src={this.props.content.mainPic} />
                    </section>

                    {/*--big--image--*/}

                    <section className={styles.sec2}>
                        <div className={styles.sec2Div1}>
                            <img src={this.props.content.profilePic} />
         
                                <div>
                                   <p><span className={styles.profilename}>{this.props.content.profileName}</span><span>{this.props.content.dotIcon}</span><span className={styles.instaIcon}>{this.props.content.instaIcon}</span></p>
                                   <p className={styles.accountId}>{this.props.content.accountId}</p>          
                                </div>     
                        </div>
                        {/*--profile-top-detial--*/} 

                        <div className={styles.reactions}>
                            <div>
                                
                                <p className={styles.p2}>{this.props.content.impressions}</p>
                                <p className={styles.p1}>{this.props.content.impressionsTitle}</p>
                            </div>
                            <div>
                                
                                <p className={styles.p2}>{this.props.content.reach}</p>
                                <p  className={styles.p1}>{this.props.content.reachTitle}</p>
                            </div>
                            <div>
                              
                                <p className={styles.p2}>{this.props.content.likes}</p>
                                <p  className={styles.p1}>{this.props.content.likesTitle}</p>
                            </div>
                            <div>
                                
                                <p className={styles.p2}>{this.props.content.comments}</p>
                                <p  className={styles.p1}>{this.props.content.commentsTitle}</p>
                            </div>
                            <div>
                             
                                <p className={styles.p2}>{this.props.content.enRate}</p>
                                <p  className={styles.p1}>{this.props.content.engRateTitle}</p>
                            </div>
                        </div>

                        {/*--impression, reach, likes, comment portion --*/}

                        <div className={styles.description}>
                            <p className={styles.descriptionTitle}>{this.props.content.descriptionTitle}</p>
                            <p className={styles.descriptionContent}>{this.props.content.descriptionContent}</p>
                        </div>

                        {/*--descriptions--portions--*/}

                        <div className={styles.last}>
                             <div>
                                 <p className={styles.p2}>{this.props.content.mentionsTitle}</p>
                                 <p className={styles.p1}>{this.props.content.mentionsContent}</p>
                             </div>
                             <div>
                                 <p className={styles.p2}>{this.props.content.hashtagsTitle}</p>
                                 <p className={styles.p1}>{this.props.content.hashtagsContent}</p>
                             </div>
                             <div>
                                 <p className={styles.p2}>{this.props.content.locationTitle}</p>
                                 <p className={styles.p1}>{this.props.content.locationContent}</p>
                             </div>
                        </div>
                    </section>
           
         </div>
           
         <div onClick={this.onNext.bind(this)}>
             <button className={styles.arrow}>
                 {this.props.content.nextArrow}
             </button>
         </div>
         </div>
     </Modal>
  </div>
    ) 
}
}

export default ModalDesign;