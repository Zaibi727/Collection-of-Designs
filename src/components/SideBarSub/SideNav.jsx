import React from 'react';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import styles from './sidebarsub.module.css';

import {GiCoffeeCup} from "react-icons/gi";
import {FaRegUser} from "react-icons/fa";
import {AiFillSetting} from "react-icons/ai";

import {MdKeyboardArrowDown} from 'react-icons/md'
import {MdKeyboardArrowUp} from 'react-icons/md'

import Projects from './Projects';
import Members from './Members';
import Teams from './Teams';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
  } from "react-router-dom";


class SideNav extends React.Component {

    constructor(props) {
        super(props);
       
        this.state = { 
            open: false,
            opene: false,
         };

         this.handleButtonOneClick = this.handleButtonOneClick.bind(this);
         this.handleClickOutside = this.handleClickOutside.bind(this);

         this.handleButtonTwoClick = this.handleButtonTwoClick.bind(this);
         this.handleClickOutsideTwo = this.handleClickOutsideTwo.bind(this)
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

      container = React.createRef();

      componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
        document.addEventListener("mousedown", this.handleClickOutsideTwo);
    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
      document.removeEventListener("mousedown", this.handleClickOutsideTwo);
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


    render(){
    return (
        <div className={styles.sidenav}>

            <div className={styles.div1}>
                <p className={styles.hh}>React-minimal-side-navigation</p>
            </div>
          <Router>
              <ul className={styles.div2}>
                  <li className={styles.home}>
                  <NavLink activeClassName={styles.rest} to="/projects" className={styles.lastActive}>
                  <span className={styles.icon}><GiCoffeeCup /></span>Home
                  </NavLink>
                  </li>

                  <li className={styles.about} onClick={this.handleButtonOneClick} style={{backgroundColor: this.state.open == true && "#f3f4f6", borderLeft: this.state.open == true && '5px solid red'}}>
                      <div className={styles.aboutDiv}>
                          <p className={styles.p1}><span className={styles.icon}><FaRegUser /></span>About</p>
                          <p className={styles.p2}>{this.state.open ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}</p>
                      </div>
                  </li>
                         {this.state.open && (
                  <ul className={styles.subUl}>
                     <li>
                         <NavLink activeClassName={styles.rest} to="/projects" className={styles.lastActive}>Project</NavLink>
                     </li>
                     <li>
                         <NavLink activeClassName={styles.rest} to="/members" className={styles.lastActive}>Members</NavLink>
                     </li>
                  </ul>
              )}
                  <li className={styles.another} onClick={this.handleButtonTwoClick} style={{backgroundColor: this.state.opene == true && "#f3f4f6", borderLeft: this.state.opene == true && '5px solid red'}}>
                       <div className={styles.antoterDiv}>
                          <p className={styles.p1}>Anoter Tab</p>
                          <p className={styles.p2}>{this.state.opene ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}</p>
                      </div>

                  </li>
                  {this.state.opene && (             
                       <ul className={styles.subUl}>
                             <li>
                                 <NavLink activeClassName={styles.rest} to="/teams" className={styles.lastActive}>
                                     Teams
                                 </NavLink>
                             </li>
                        </ul>
                    )}
              </ul>
          
               

            
            
            
            <ul className={styles.div3}>
                <li>
                   <NavLink to="/teams" activeClassName={styles.rest} className={styles.lastActive}><span className={styles.setting}><AiFillSetting /></span>Settings</NavLink>
                </li>
            </ul>

            <Switch>
                     <Route path="/projects" component={Projects}/>
                     <Route path="/members" component={Members}/>
                     <Route path="/teams" component={Teams}/>
                 </Switch> 
       </Router>
        </div>
    )
    }
}

export default SideNav;
