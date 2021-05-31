import React, { Component } from 'react';
import styles from './thirtyFirst.module.css';
import { FiMenu } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { MdKeyboardArrowDown } from 'react-icons/md';
import NotiMessage from './NotiMessage';
import AccountDropDown from './AccountDropDown';

import { FaRegUser } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FaTasks } from 'react-icons/fa';
import { FaInbox } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { BsFillLockFill } from 'react-icons/bs';
import { HiOutlineLogout } from 'react-icons/hi';
import {ImCross} from 'react-icons/im';

import SmallSidebar from './SmallSidebar';
import LargSidebar from './LargeSidebar';

import Test from '../twentyApril/firstRender';

class TopBar extends Component {
   
    constructor(props) {
        super(props);
       
        this.state = { 
            open: false,
            opene: false,
            openee: false,
            openeee: false,
            openeeee: false,
         };

         this.handleButtonOneClick = this.handleButtonOneClick.bind(this);
         this.handleClickOutside = this.handleClickOutside.bind(this);

         this.handleButtonTwoClick = this.handleButtonTwoClick.bind(this);
         this.handleButtonThreeClick = this.handleButtonTwoClick.bind(this);
         this.handleButtonFourClick = this.handleButtonFourClick.bind(this);
         this.handleButtonFiveClick = this.handleButtonFiveClick.bind(this);

    }

    handleButtonOneClick = () => {
        this.setState(state => {
          return {
            open: !state.open,
          };
        });
      };

      handleButtonTwoClick = () => {
        this.setState(state => {
          return {
            opene: !state.opene,
          };
        });
      };

      handleButtonThreeClick = () => {
        this.setState(state => {
          return {
            openee: !state.openee,
          };
        });
      };

      handleButtonFourClick = () => {
        this.setState(state => {
          return {
            openeee: !state.openeee,
          };
        });
      };

      handleButtonFiveClick = () => {
        this.setState(state => {
          return {
            openeeee: !state.openeeee,
          };
        });
      };

      container = React.createRef();

      componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
        document.addEventListener("mousedown", this.handleClickOutsideTwo);
        document.addEventListener("mousedown", this.handleClickOutsideThree);
        document.addEventListener("mousedown", this.handleClickOutsideFour);
        document.addEventListener("mousedown", this.handleClickOutsideFive);
    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
      document.removeEventListener("mousedown", this.handleClickOutsideTwo);
      document.removeEventListener("mousedown", this.handleClickOutsideThree);
      document.removeEventListener("mousedown", this.handleClickOutsideFour);
      document.removeEventListener("mousedown", this.handleClickOutsideFive);
    }

    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            open: false,
          });
        }
      };

      handleClickOutsideTwo = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            opene: false,
          });
        }
      };

      handleClickOutsideThree = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            openee: false,
          });
        }
      };

      handleClickOutsideFour = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            openeee: false,
          });
        }
      };

      handleClickOutsideFive = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            openeeee: false,
          });
        }
      };


    render() { 

        const openeeee = this.state.openeeee;
        let button;
        if (openeeee) {
          button = <SmallSidebar />;
        } else {
          button = <LargSidebar />;
        }

        return ( 
            <div className={styles.topBarWrapper}>
                <div className={styles.topbarDiv1}>
                    <button onClick={this.handleButtonFiveClick}>
                        <FiMenu />
                    </button>
                    <div>
                    {button}
                    </div>
                </div>

                <div className={styles.topbarDiv2}>
                    <input 
                        placeholder="Search"
                    />
                    <span className={styles.multi}><ImCross /></span>
                </div>

                <div className={styles.topbarDiv3}>
                    <button onClick={this.handleButtonTwoClick}>
                        <FaBell />
                    </button>
                    {this.state.opene === true && (
                        <div className={styles.notificationDiv}>
                            <div className={styles.noificationHeader}>
                                <p>Notifications</p>
                                <p>Mark all as read</p>
                            </div>
                            <div className={styles.same}>
                               <NotiMessage 
                                   src="./images/profile.jpg"
                                   name="Chridtopher Changer"
                                   text="has started a new Project"
                                   time="09:02"
                               />
                            </div>
                            <div className={styles.same}>
                               <NotiMessage 
                                   src="./images/profile.jpg"
                                   name="Chridtopher Changer"
                                   text="has started a new Project"
                                   time="09:02"
                               />
                            </div>
                            <div className={styles.same}>
                               <NotiMessage 
                                   src="./images/profile.jpg"
                                   name="Chridtopher Changer"
                                   text="has started a new Project"
                                   time="09:02"
                               />
                            </div>
                            <div className={styles.same}>
                               <NotiMessage 
                                   src="./images/profile.jpg"
                                   name="Chridtopher Changer"
                                   text="has started a new Project"
                                   time="09:02"
                               />
                            </div>
                            <div className={styles.noificationFooter}>
                                <p>
                                    SEE ALL NOTIFICATONS
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                <div className={styles.topbarDiv4}>
                    <button onClick={this.handleButtonThreeClick}>
                        <SiGooglemessages />
                    </button>
                    {this.state.openee === true && (
                        <div className={styles.notificationDiv}>
                            <div className={styles.noificationHeader}>
                                <p>Unread messages</p>
                                <p>Mark all as read</p>
                            </div>
                            <div className={styles.same}>
                               <NotiMessage 
                                   src="./images/profile.jpg"
                                   name="Chridtopher Changer"
                                   text="has started a new Project"
                                   time="09:02"
                               />
                            </div>
                            <div className={styles.same}>
                               <NotiMessage 
                                   src="./images/profile.jpg"
                                   name="Chridtopher Changer"
                                   text="has started a new Project"
                                   time="09:02"
                               />
                            </div>
                            <div className={styles.same}>
                               <NotiMessage 
                                   src="./images/profile.jpg"
                                   name="Chridtopher Changer"
                                   text="has started a new Project"
                                   time="09:02"
                               />
                            </div>
                            <div className={styles.same}>
                               <NotiMessage 
                                   src="./images/profile.jpg"
                                   name="Chridtopher Changer"
                                   text="has started a new Project"
                                   time="09:02"
                               />
                            </div>
                            <div className={styles.noificationFooter}>
                                <p>
                                    SEE ALL NOTIFICATONS
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                <div className={styles.topbarDiv5} onClick={this.handleButtonFourClick}>
                    <img src="./images/profile.jpg"/>
                    <p>Roman Johanson</p>
                    <span><MdKeyboardArrowDown /></span>
                </div>
                {this.state.openeee === true && (
                    <div className={styles.AccountDiv}>
                        <div>
                           <div>
                              <AccountDropDown 
                                  title="My Profile"
                                  Icon={FaRegUser}
                              />
                           </div>
                           <div>
                              <AccountDropDown 
                                  title="Calendar"
                                  Icon={AiOutlineCalendar}
                              />
                           </div>
                           <div>
                             <AccountDropDown 
                                 title="Tasks"
                                 Icon={FaTasks}
                             />
                           </div>
                           <div>
                             <AccountDropDown 
                              title="Inbox"
                                 Icon={FaInbox}
                             />
                           </div>
                        </div>
                        <div>
                        <div>
                              <AccountDropDown 
                              title="Account Setting"
                                  Icon={AiFillSetting}
                              />
                           </div>
                           <div>
                              <AccountDropDown 
                              title="Lock Screen"
                                  Icon={BsFillLockFill}
                              />
                           </div>
                           <div>
                             <AccountDropDown 
                                title="Log Out"
                                 Icon={HiOutlineLogout}
                             />
                           </div>
                        </div>
                    </div>
                )}
            

                <div className={styles.topbarDiv6}>
                   <Test />
                </div>
            </div>
         );
    }
}
 
export default TopBar;