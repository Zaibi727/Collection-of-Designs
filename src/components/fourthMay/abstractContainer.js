import React, { Component } from 'react';
import AbstarctTabItem from './abstractItem';
import styles from './fourtMay.module.css';
import FirstData from './firstData';
import SecondData from './secondData';
import ThirdData from './thirdData';


class AbstractTabContainer extends Component {
    constructor(props) {
        super(props); 
        this.state = { 
            showMessage1: false ,
            showMessage2: false,
            showMessage3: false,
        }
      }
    
    handleClick1 = () => this.setState({showMessage1: true});
    handleClick2 = () => this.setState({showMessage2: true});
    handleClick3 = () => this.setState({showMessage3: true});


    render() { 

        return ( 
            <div className={styles.wrapper}>
                 <nav className={styles.nav}>
                    <ul className={styles.ul}>
                       
                        <li className={styles.li}>
                            <div className={styles.ddd}>
                               <button ref  className={styles.btn} onClick={this.handleClick1}>
                                 <AbstarctTabItem 
                                  title='General'                        
                                 />
                           </button>
                           </div>
                           <div className={styles.dataa}>
                           { this.state.showMessage1 && (<FirstData />) }
                           </div>
                        </li>
                        


                        <li className={styles.li}>
                            <div className={styles.ddd}>
                               <button ref className={styles.btn} onClick={this.handleClick2}>
                             <AbstarctTabItem 
                               title='Business'
                             />
                           </button>
                           </div>
                           <div className={styles.dataa}>
                           { this.state.showMessage2 && (<SecondData />) }
                           </div>
                        </li>


                        <li className={styles.li}>
                            <div className={styles.ddd}>
                               <button ref className={styles.btn} onClick={this.handleClick3}>
                             <AbstarctTabItem 
                               title='Local'
                             />
                           </button>
                           </div>
                           <div className={styles.dataa}>
                           { this.state.showMessage3 && (<ThirdData />) }
                           </div>
                        </li>

                    </ul>                   
    
                 </nav>
      
            </div>
         );
    }
}
 
export default AbstractTabContainer;