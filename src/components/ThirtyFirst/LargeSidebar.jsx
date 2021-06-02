import React, { Component } from 'react';
import styles from './thirtyFirst.module.css';

import { AiOutlineHome } from "react-icons/ai";
import { FaStore} from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";
import { BiBookOpen } from "react-icons/bi";
import { GoRocket } from "react-icons/go";
import { AiOutlineLayout } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

import { GrDiamond  } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { BsFillChatFill } from "react-icons/bs";
import { SiTodoist } from "react-icons/si";
import { FaWpforms } from "react-icons/fa";
import { AiOutlineTable } from "react-icons/ai";
import { IoBarChartSharp } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";


import { BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

import { BiLogIn } from "react-icons/bi";
import { TiDocumentText } from "react-icons/ti";
import {MdKeyboardArrowDown} from 'react-icons/md';
import {MdKeyboardArrowUp} from 'react-icons/md';
import {MdKeyboardArrowRight} from 'react-icons/md';
import {BsDot} from 'react-icons/bs';

class LargSidebar extends Component {

 
    constructor(props) {
        super(props);
       
        this.state = { 
            opena: false,
            opneb: false,
            openc: false,
            opned: false,
            opene: false,
            opnef: false,
            openg: false,
            opneh: false,
            openi: false,
            opnej: false,
            openk: false,
            opnel: false,
        
         };

    this.handleButtonAClick = this.handleButtonAClick.bind(this);
    this.handleButtonBClick = this.handleButtonBClick.bind(this);
    this.handleButtonCClick = this.handleButtonCClick.bind(this);
    this.handleButtonDClick = this.handleButtonDClick.bind(this);
    this.handleButtonEClick = this.handleButtonEClick.bind(this);
    this.handleButtonFClick = this.handleButtonFClick.bind(this);
    this.handleButtonGClick = this.handleButtonGClick.bind(this);
    this.handleButtonHClick = this.handleButtonHClick.bind(this);
    this.handleButtonIClick = this.handleButtonIClick.bind(this);
    this.handleButtonJClick = this.handleButtonJClick.bind(this);
    this.handleButtonKClick = this.handleButtonKClick.bind(this);
    this.handleButtonLClick = this.handleButtonLClick.bind(this);

        }

        handleButtonAClick = () => {
            this.setState(state => {
              return {
                opena: !state.opena,
              };
            });
          };

    handleButtonBClick = () => {
        this.setState(state => {
          return {
            openb: !state.openb,
          };
        });
      };

      handleButtonCClick = () => {
        this.setState(state => {
          return {
            openc: !state.openc,
          };
        });
      };

      handleButtonDClick = () => {
        this.setState(state => {
          return {
            opend: !state.opend,
          };
        });
      };

      handleButtonEClick = () => {
        this.setState(state => {
          return {
            opene: !state.opene,
          };
        });
      };

      handleButtonFClick = () => {
        this.setState(state => {
          return {
            openf: !state.openf,
          };
        });
      };

      handleButtonGClick = () => {
        this.setState(state => {
          return {
            openg: !state.openg,
          };
        });
      };

      handleButtonHClick = () => {
        this.setState(state => {
          return {
            openh: !state.openh,
          };
        });
      };

      handleButtonIClick = () => {
        this.setState(state => {
          return {
            openi: !state.openi,
          };
        });
      };

      handleButtonJClick = () => {
        this.setState(state => {
          return {
            openj: !state.openj,
          };
        });
      };
      handleButtonKClick = () => {
        this.setState(state => {
          return {
            openk: !state.openk,
          };
        });
      };
      handleButtonLClick = () => {
        this.setState(state => {
          return {
            openl: !state.openl,
          };
        });
      };

      container = React.createRef();

      componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutsideA);
        document.addEventListener("mousedown", this.handleClickOutsideB);
        document.addEventListener("mousedown", this.handleClickOutsideC);
        document.addEventListener("mousedown", this.handleClickOutsideD);
        document.addEventListener("mousedown", this.handleClickOutsideE);
        document.addEventListener("mousedown", this.handleClickOutsideF);
        document.addEventListener("mousedown", this.handleClickOutsideG);
        document.addEventListener("mousedown", this.handleClickOutsideH);
        document.addEventListener("mousedown", this.handleClickOutsideI);
        document.addEventListener("mousedown", this.handleClickOutsideJ);
        document.addEventListener("mousedown", this.handleClickOutsideK);
        document.addEventListener("mousedown", this.handleClickOutsideL);

    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutsideA);
      document.removeEventListener("mousedown", this.handleClickOutsideB);
      document.removeEventListener("mousedown", this.handleClickOutsideC);
      document.removeEventListener("mousedown", this.handleClickOutsideD);
      document.removeEventListener("mousedown", this.handleClickOutsideE);
      document.removeEventListener("mousedown", this.handleClickOutsideF);
      document.removeEventListener("mousedown", this.handleClickOutsideG);
      document.removeEventListener("mousedown", this.handleClickOutsideH);
      document.removeEventListener("mousedown", this.handleClickOutsideI);
      document.removeEventListener("mousedown", this.handleClickOutsideJ);
      document.removeEventListener("mousedown", this.handleClickOutsideK);
      document.removeEventListener("mousedown", this.handleClickOutsideL);
    }

    handleClickOutsideA = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            opena: false,
          });
        }
      };
      handleClickOutsideB = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            openb: false,
          });
        }
      };
      handleClickOutsideC = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            openc: false,
          });
        }
      };
      handleClickOutsideD = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            opend: false,
          });
        }
      };
      handleClickOutsideE = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            opene: false,
          });
        }
      };
      handleClickOutsideF = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            openf: false,
          });
        }
      };
      handleClickOutsideG = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            openg: false,
          });
        }
      };
      handleClickOutsideH = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            openh: false,
          });
        }
      };
      handleClickOutsideI = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            openi: false,
          });
        }
      };
      handleClickOutsideJ = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            openj: false,
          });
        }
      };
      handleClickOutsideK = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            openk: false,
          });
        }
      };
      handleClickOutsideL = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            openl: false,
          });
        }
      };


    render() { 
        return ( 
            <div className={styles.largSidebarWrapper}>
               <div className={styles.ul111}>
               <ul className={styles.largUl1} >
                    <li><span><AiOutlineHome /></span> Online Marketing Dashboard</li>
                    <li><span><FaStore /></span> E-commerce Dashboard</li>
                    <li><span><AiOutlineMobile /></span> App Dashboard</li>
                    <li><span><BiBookOpen /></span> Booking Dashboard</li>
                    <li><span><GoRocket /></span> Finance Dashboard</li>
                    <li><span><FiLogOut /></span> Fitness Dashboard</li>

                    <li onClick={this.handleButtonLClick} className={styles.uiElement}>
                        <p><span><AiOutlineLayout /></span> Layout</p>
                        <p>{this.state.openl ? <MdKeyboardArrowDown className={styles.arrow} /> : <MdKeyboardArrowRight className={styles.arrow} />}</p>
                    </li>
                    {this.state.openl && (
                             <ul className={styles.UIUL}>
                                <li>Light Theme</li>
                                <li>Dark Theme</li>
                             </ul>
                          )}

                    <li><span><FiLogOut /></span>Log In</li>
                </ul>
               </div>

              <div className={styles.ul111}>
              <ul className={styles.largUl1} >
                    <li onClick={this.handleButtonAClick} className={styles.uiElement}>
                        <p><span><GrDiamond /></span> UI Elements</p>
                        <p>{this.state.opena ? <MdKeyboardArrowDown className={styles.arrow} /> : <MdKeyboardArrowRight className={styles.arrow} />}</p>
                    </li>
                          {this.state.opena && (
                             <ul className={styles.UIUL}>
                                <li>Alerts</li>
                                <li>Buttons</li>
                                <li>Carousel</li>
                                <li>Grids</li>
                                <li>Modals</li>
                                <li>Notifications</li>
                                <li>Panels</li>
                                <li>Progress Bars</li>
                                <li>Range Sliders</li>
                                <li>Tabs</li>
                                <li>Timeline</li>
                                <li>Tooltips & Popovers</li>
                                <li>Typography</li>
                             </ul>
                          )}



                    <li><span><FiMail /></span> Mail Application</li>
                    <li><span><BsFillChatFill /></span>Chat Application</li>
                    <li><span><SiTodoist /></span> Todo Application <span className={styles.redNew}>New</span></li>
                    <li onClick={this.handleButtonBClick} className={styles.uiElement}>
                        <p><span><FaWpforms /></span> Forms</p>
                        <p>{this.state.openb ? <MdKeyboardArrowDown className={styles.arrow} /> : <MdKeyboardArrowRight className={styles.arrow} />}</p>
                    </li>
                    {this.state.openb && (
                             <ul className={styles.UIUL}>
                                <li onClick={this.handleButtonCClick} className={styles.uiElement}>
                                  <p>Redux Forms</p>
                                  <p>{this.state.openc ? <MdKeyboardArrowDown className={styles.arrow} /> : <MdKeyboardArrowRight className={styles.arrow} />}</p>
                                </li>
                                {this.state.openc && (
                             <ul className={styles.UIUL}>
                                <li>Basic Form</li>
                                <li>Check Form Controls</li>
                                <li>File Upload</li>
                                <li>Floating Lables Form</li>
                                <li>Form Dropzone</li>
                                <li>Form Layouts</li>
                                <li>Form Picker</li>
                                <li>Form Validation</li>
                                <li>Mask Form</li>
                                <li>Material Form</li>
                                <li>Wizard Form</li>
                             </ul>
                          )}

                                <li  onClick={this.handleButtonDClick} className={styles.uiElement}>
                                    <p>React hook form</p>
                                    <p>{this.state.opend ? <MdKeyboardArrowDown className={styles.arrow} /> : <MdKeyboardArrowRight className={styles.arrow} />}</p>
                                </li>

                                {this.state.opend && (
                             <ul className={styles.UIUL}>
                                <li>Basic Form</li>
                                <li>Foem Validation</li>
                                <li>Wizard Form</li>
                             </ul>
                          )}
                             </ul>
                          )}


                    <li onClick={this.handleButtonEClick} className={styles.uiElement}>
                        <p><span><AiOutlineTable /></span>Tables <BsDot className={styles.dot} /></p>
                        <p>{this.state.opene ? <MdKeyboardArrowDown className={styles.arrow} /> : <MdKeyboardArrowRight className={styles.arrow} />}</p>
                    </li>
                    {this.state.opene && (
                             <ul className={styles.UIUL}>
                                <li>Basic tables</li>
                                <li>Data tables <span className={styles.redNew}>New</span></li>
                                <li>Drag and Drop table <span className={styles.redNew}>New</span></li>
                                <li>Editable table</li>
                                <li>Material tables</li>
                                <li>Width resizeable tables</li>
                                <li>Form Picker</li>
                                <li>Form Validation <span className={styles.redNew}>New</span></li>
                             </ul>
                          )}


                    <li onClick={this.handleButtonFClick} className={styles.uiElement}>
                        <p><span><IoBarChartSharp /></span> Charts</p>
                        <p>{this.state.openf ? <MdKeyboardArrowDown className={styles.arrow} /> : <MdKeyboardArrowRight className={styles.arrow} />}</p>
                    </li>
                    {this.state.openf && (
                             <ul className={styles.UIUL}>
                                <li>ChartsJS</li>
                                <li>React-vis</li>
                                <li>Recharts</li>
                             </ul>
                          )}


                    <li onClick={this.handleButtonGClick} className={styles.uiElement}>
                        <p><span><SiGooglemaps /></span>Maps <BsDot className={styles.dot} /></p>
                        <p>{this.state.openg ? <MdKeyboardArrowDown className={styles.arrow} /> : <MdKeyboardArrowRight className={styles.arrow} />}</p>
                    </li>
                    {this.state.openg && (
                             <ul className={styles.UIUL}>
                                <li>Google map</li>
                                <li>Vector map</li>
                                <li>map with api request <span className={styles.redNew}>New</span></li>
                             </ul>
                          )}
                </ul>
              </div>

              <div className={styles.ul111}>
              <ul className={styles.largUl1} >
                    <li onClick={this.handleButtonHClick} className={styles.uiElement}>
                        <p><span><BiUser /></span> Account <BsDot className={styles.dot} /></p>
                        <p>{this.state.openh ? <MdKeyboardArrowDown className={styles.arrow} /> : <MdKeyboardArrowRight className={styles.arrow} />}</p>                 
                    </li>
                    {this.state.openh && (
                             <ul className={styles.UIUL}>
                                <li>Email Confirmation</li>
                                <li>Lock Screen</li>
                                <li>Log In Photo</li>
                                <li>Profile</li>
                                <li>Register</li>
                                <li>Register Photo</li>
                                <li>Reset Password <span className={styles.redNew}>New</span></li>
                                <li>Reset Password Photo <span className={styles.redNew}>New</span></li>
                             </ul>
                          )}

                    <li onClick={this.handleButtonIClick} className={styles.uiElement}> 
                         <p><span><AiOutlineShoppingCart /></span> E-Commerce</p>
                         <p>{this.state.openi ? <MdKeyboardArrowDown className={styles.arrow} /> : <MdKeyboardArrowRight className={styles.arrow} />}</p>                 
                    </li>
                    {this.state.openi && (
                             <ul className={styles.UIUL}>
                                <li>Cart</li>
                                <li>Catalog</li>
                                <li>Orders List</li>
                                <li>Payment</li>
                                <li>Product Edit</li>
                                <li>Product Page</li>
                                <li>Product List</li>
                             </ul>
                          )}

                    <li onClick={this.handleButtonJClick} className={styles.uiElement}>
                         <p><span><RiPagesLine /></span>Default Pages</p>
                         <p>{this.state.openj ? <MdKeyboardArrowDown className={styles.arrow} /> : <MdKeyboardArrowRight className={styles.arrow} />}</p> 
                    </li>
                    {this.state.openj && (
                             <ul className={styles.UIUL}>
                                <li>404</li>
                                <li>Calendar</li>
                                <li>FAQ's</li>
                                <li>Gallery</li>
                                <li>Invoice tempalte</li>
                                <li>Pricing Cards</li>
                                <li>Project Summary</li>
                                <li>Search Results</li>
                                <li>Text Editor</li>
                             </ul>
                          )}

                    <li onClick={this.handleButtonKClick} className={styles.uiElement}>
                         <p><span><GiHamburgerMenu /></span> Multilevel Menu</p>
                         <p>{this.state.openk ? <MdKeyboardArrowDown className={styles.arrow} /> : <MdKeyboardArrowRight className={styles.arrow} />}</p> 
                    </li>
                    {this.state.openk && (
                             <ul className={styles.UIUL}>
                                <li>Second Level Item</li>
                                <li>Second Level Item</li>
                             </ul>
                          )}
                </ul>
              </div>


                <div className={styles.ul111}>
                <ul className={styles.largUl1} >
                    <li><span><BiLogIn /></span>Log Out</li>
                </ul>
                </div>

              <div className={styles.ul111}>
              <ul className={styles.largUl1}>
                    <li><span><TiDocumentText /></span>Documentation</li>
                </ul>
              </div>
            </div>
         );
    }
}
 
export default LargSidebar;