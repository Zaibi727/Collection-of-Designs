import React from 'react';
import styles from './juneEight.module.css';
import CardAb from './CardAb';
import CardTitleAb from './CardTitleAb';
import LanguageRender from './ModuleComonents/Language/LanguageRender';
import DistanceRender from './ModuleComonents/Distance/DistanceRender';
import TimeRender from './ModuleComonents/Time/TimeRender';
import CurrencyRender from './ModuleComonents/Currency/CurrencyRender';

function JuneEightContainer() {
    return (
        <div className={styles.conatiner}>
            <CardAb className={styles.containerCardAb}>
                <div>
                    <CardTitleAb 
                        title="System preference"
                    />
                </div>
                <section>
                    <div className={styles.containerLangage}>
                        <LanguageRender />
                    </div>
                    <div className={styles.containerLangage}>
                        <DistanceRender />
                    </div>
                    <div className={styles.containerLangage}>
                        <TimeRender />
                    </div>
                    <div className={styles.containerLangage}>
                        <CurrencyRender />
                    </div>
                </section>
            </CardAb>
        </div>
    )
}

export default JuneEightContainer;