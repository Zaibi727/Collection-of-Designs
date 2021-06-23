import React from 'react';
import AbBotttom from './AbBotttom';
import AbTop from './AbTop';
import styles from './HomeScreenOne.module.css';
import { FaFacebookF } from "react-icons/fa";
import zIndex from '@material-ui/core/styles/zIndex';

function HomeScreenOneContainer() {

 

    return (
        <div className={styles.HomeScreenOneContainer}
          style={{  
        backgroundImage: "url(./images/eight3.jpg)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 1,
      }}
        >
            <div>
                <AbTop 
                    src="./images/profile.jpg"
                    name="Name S"
                    time="3h ago"
                />
            </div>
            <div>
                <AbBotttom 
                    Icon={FaFacebookF}
                />
            </div>
        </div>
    )
}

export default HomeScreenOneContainer
