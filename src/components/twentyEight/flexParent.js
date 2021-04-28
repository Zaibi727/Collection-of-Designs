import React, { Component } from 'react';
import AbstractEight from './abstractEight';
import styles from './twentyEight.module.css';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { SiGooglemybusiness } from 'react-icons/si';
import { FaHandSpock } from 'react-icons/fa'


class FlexParent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.whole}>
            <div className={styles.wrapper}>
                <label className={styles.label1}>
                    <div className={styles.div1}>
                        <div className={styles.div11}>
                           <AbstractEight 
                           type="checkbox"
                           id="checkbox1"
                            />
                        </div>
                        <div className={styles.div12}>
                           <button>
                           <SiGooglemybusiness className={styles.hand} />
                           </button>
                        </div>
                        <div className={styles.div13}>
                            <p className={styles.p1}>Pizzeria Marilu</p>
                            <p className={styles.p2}> Local business</p>
                        </div>
                    </div>

                    <div className={styles.div2}>
                        <div className={styles.div21}>
                            <p className={styles.p1}>Owner</p>
                            <p className={styles.p2}>Role</p>
                        </div>
                        <div className={styles.div22}>
                            <button>
                            <HiOutlineDotsHorizontal />
                            </button>
                        </div>
                    </div>

                </label>

                {/*--label-one--*/}

                <label className={styles.label1}>
                    <div className={styles.div1}>
                        <div className={styles.div11}>
                           <AbstractEight 
                           type="checkbox"
                           id="checkbox2"
                            />
                        </div>
                        <div className={styles.div12}>
                           <button>
                           <FaHandSpock className={styles.hand} />
                           </button>
                        </div>
                        <div className={styles.div13}>
                            <p className={styles.p1}>ManoNera Creactives</p>
                            <p className={styles.p2}> Agency</p>
                        </div>
                    </div>

                    <div className={styles.div2}>
                        <div className={styles.div21}>
                            <p className={styles.p1}>Admin</p>
                            <p className={styles.p2}>Role</p>
                        </div>
                        <div className={styles.div22}>
                            <button>
                            <HiOutlineDotsHorizontal />
                            </button>
                        </div>
                    </div>

                </label>
               
            </div>
            </div>
         );
    }
}
 
export default FlexParent;