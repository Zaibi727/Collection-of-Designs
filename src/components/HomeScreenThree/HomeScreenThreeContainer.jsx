import React from 'react';
import AbMiddle from './AbMiddle';
import AbTop from './AbTop';
import { ImYelp } from "react-icons/im";
import styles from './HomeThree.module.css';


function HomeScreenThreeContainer() {
    return (
       <div className={styles.container}>
            <div className={styles.wrapper}>
            <AbTop 
                src="./images/eight4.jpg"
                username="Audrey Williamson  ."
                time="11 February, 07:15"
                Icon={ImYelp}
            />
            <AbMiddle 
                link="https://button-cards.herokuapp.com/"
                src="./images/eight-1.jpg"
            />
        </div>
       </div>
    )
}

export default HomeScreenThreeContainer;
