import React from 'react';
import AbstractCard from './AbstractCard';
import AbstractRoundButton from './AbstractRoundButton';
import styles from './TaskOne.module.css';

import { VscGraph } from "react-icons/vsc";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import {MdPieChartOutlined} from "react-icons/md";
import {FaUsers} from "react-icons/fa";
import {FaTrophy} from "react-icons/fa";

export default function TaskOneContainer() {
    return (
        <div className={styles.double}>
        <div className={styles.taskOneContainer}>
            <section className={styles.sec}>
                <AbstractCard>
                    <div className={styles.topDiv}>
                        <div className={styles.topDiv1}>
                            <p className={styles.title}>TRAFFIC</p>
                            <p className={styles.number}>350, 897</p>
                        </div>
                        <div>
                            <AbstractRoundButton 
                                Icon={VscGraph}
                                style={{ backgroundColor: 'red' }}
                            />
                        </div>
                    </div>
                    <div className={styles.bottomDiv}>
                        <p className={styles.trafficArrow}> <BsArrowUp /></p>
                        <p className={styles.traffcPercent}>3.48%</p>
                        <p className={styles.traficHistory}>Since last month</p>
                    </div>
                </AbstractCard>
            </section>

            {/*--section1--*/}

            <section className={styles.sec}>
                <AbstractCard>
                    <div className={styles.topDiv}>
                        <div className={styles.topDiv1}>
                            <p className={styles.title}>NEW USERS</p>
                            <p className={styles.number}>2,356</p>
                        </div>
                        <div>
                            <AbstractRoundButton 
                                Icon={MdPieChartOutlined}
                                style={{ backgroundColor: '#fb6340' }}
                            />
                        </div>
                    </div>
                    <div className={styles.bottomDiv}>
                        <p className={styles.userArrow}> <BsArrowDown /></p>
                        <p className={styles.userPercent}>3.48%</p>
                        <p className={styles.traficHistory}>Since last week</p>
                    </div>
                </AbstractCard>
            </section>

            {/*--sec2--*/}

            <section className={styles.sec}>
                <AbstractCard>
                    <div className={styles.topDiv}>
                        <div className={styles.topDiv1}>
                            <p className={styles.title}>Sales</p>
                            <p className={styles.number}>924</p>
                        </div>
                        <div>
                            <AbstractRoundButton 
                                Icon={FaUsers}
                                style={{ backgroundColor: 'orange' }}
                            />
                        </div>
                    </div>
                    <div className={styles.bottomDiv}>
                        <p className={styles.userArrow}> <BsArrowDown /></p>
                        <p className={styles.userPercent}>1.10%</p>
                        <p className={styles.traficHistory}>Since last month</p>
                    </div>
                </AbstractCard>
            </section>

            {/*--section3--*/}

            <section className={styles.sec}>
                <AbstractCard>
                    <div className={styles.topDiv}>
                        <div className={styles.topDiv1}>
                            <p className={styles.title}>Performance</p>
                            <p className={styles.number}>49, 65%</p>
                        </div>
                        <div>
                            <AbstractRoundButton 
                                Icon={FaTrophy}
                                style={{ backgroundColor: '#119fef' }}
                            />
                        </div>
                    </div>
                    <div className={styles.bottomDiv}>
                        <p className={styles.trafficArrow}> <BsArrowUp/></p>
                        <p className={styles.traffcPercent}>10%</p>
                        <p className={styles.traficHistory}>Since last month</p>
                    </div>
                </AbstractCard>
            </section>
        </div>
        </div>
    )
}
