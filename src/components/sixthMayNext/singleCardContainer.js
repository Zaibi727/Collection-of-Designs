import React, { Component } from 'react';
import AbstractSingleCard from './abstractSingleCard';
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineInteraction } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { GiElectric } from "react-icons/gi";
import styles from './sixMayCard.module.css';
import { BiDotsHorizontal } from "react-icons/bi";

class SingleCardMay extends Component {


    constructor(props) {
        super(props);
        this.state = {
          bgColor: ""
        }
      }
    
    
      boxClick = (e) => {
        this.setState({
          bgColor: "HoneyDew"
        })
      }


    render() { 
        return ( 
            <div className={styles.wholeWrapper}>
            <div className={styles.containerWrapper}>
                <div className={styles.containDiv1}>
                    <AbstractSingleCard 
                       src="./images/profile.jpg"
                       name="Giorgia Camillier"
                       address="Mexico . Blogger"
                       Icon1={ AiOutlineInstagram }
                       followers="24.5k"
                       Icon2={ AiOutlineInteraction }
                       actions='3.42%'
                   />
                   <div className={styles.dpDiv}>
                     <button className={styles.dropDown}><BiDotsHorizontal /></button> 
                   </div>                 
                </div>

                <div className={styles.containDiv2}>
                   <AbstractSingleCard 
                       src="./images/profile.jpg"
                       name="Maria Voronia"
                       address="Ukranine . Artist"
                       Icon1={ FiUsers }
                       followers="154k"
                       Icon2={ GiElectric }
                       actions='2.22%'
                   />
                </div>

                <div className={styles.containDiv3} >
                   <AbstractSingleCard 
                        src="./images/profile.jpg"
                       name="Jeremy Williams"
                       address="England . Photographer"
                       Icon1={ FiUsers }
                       followers="1.2M"
                       Icon2={ GiElectric }
                       actions='6.31%'
                       style={{backgroundColor: this.state.bgColor}}
                       onClick={this.boxClick}
                       
                   />
                </div>
            </div>
            </div>
         );
    }
}
 
export default SingleCardMay;