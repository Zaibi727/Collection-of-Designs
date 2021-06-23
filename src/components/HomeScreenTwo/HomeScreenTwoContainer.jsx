import React from 'react';
import AbTop from './AbTop';
import AbMiddle from './AbMiddle';
import AbBottom from './AbBottom';
import styles from './HomeTwo.module.css';
import { FiInstagram } from "react-icons/fi";

import { BiHeart } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

function HomeScreenTwoContainer() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div>
                    <AbTop 
                         src="./images/profile.jpg"
                         username="Audrey Williamson"
                         time="11 February, 07:15"
                         Icon={FiInstagram}
                    />
                </div>
                <div>
                    <AbMiddle 
                        src="./images/eight3.jpg"
                    />
                </div>
                <div>
                    <AbBottom 
                        IconLike={BiHeart}
                        likeCount="12.4K"
                        IconComment={FaRegComment}
                        commentCount="241"
                        IconShare={FiShare2}
                        shareCount="3.42%"
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeScreenTwoContainer
