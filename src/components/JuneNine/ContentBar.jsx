
import React from 'react'
import AbCard from './AbCard'
import AbCardContent from './AbCardContent'
import styles from './junenine.module.css';
import { IoDesktop  } from "react-icons/io5";

import { GrCurrency} from "react-icons/gr";
import { RiTimeFill } from "react-icons/ri";


function ContentBar(props) {
    const {Clicked, selected} = props;
    return (
        <div className={styles.conternBarWrapper}>
             <div>
              
            {Clicked  && 
                <AbCard>
                    <div className={styles.cardheading}>
                         <p><span><IoDesktop /></span>   D-Ground Corner</p>
                    </div>
                     <div className={styles.mainCardcontent}>
                         <div>
                            <AbCardContent 
                                Icon={GrCurrency}
                                label="Amount"
                                price="130,000 Pkr/-"
                              />
                         </div>
                         <div>
                            <AbCardContent 
                                Icon={GrCurrency}
                                label="Monthly Rent"
                                price="30,000 Pkr/-"
                              />
                         </div>
                         <div>
                            <AbCardContent 
                                Icon={RiTimeFill}
                                label="Duration"
                                price="5 months"
                              />
                         </div>
                     </div>
                 </AbCard>
            }
            </div>

            {/*--firt-card--*/}

            <div>
              
              {Clicked && 
                  <AbCard>
                      <div className={styles.cardheading}>
                           <p><span><IoDesktop /></span>   Dhobi Ghaat Ground</p>
                      </div>
                       <div className={styles.mainCardcontent}>
                           <div>
                              <AbCardContent 
                                  Icon={GrCurrency}
                                  label="Amount"
                                  price="130,000 Pkr/-"
                                />
                           </div>
                           <div>
                              <AbCardContent 
                                  Icon={GrCurrency}
                                  label="Monthly Rent"
                                  price="30,000 Pkr/-"
                                />
                           </div>
                           <div>
                              <AbCardContent 
                                  Icon={RiTimeFill}
                                  label="Duration"
                                  price="5 months"
                                />
                           </div>
                       </div>
                   </AbCard>
                  }
              </div>
                   {/*--card-two--*/}

                   
        </div>
    )
}

export default ContentBar;
