import React from 'react';
import Main from './Main';
import ModalData from './ModalData';
import styles from './ModalSlider.module.css';


function ModalSliderContainer() {
  const {  Content } = ModalData;

    return (
        <div className={styles.container}> 
              <Main  Content={Content}/>                  
      </div>
    )
}

export default ModalSliderContainer;
