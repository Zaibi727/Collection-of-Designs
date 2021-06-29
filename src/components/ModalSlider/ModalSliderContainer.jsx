import React from 'react';
//import Main from './Main';
import ModalData from './ModalData';
import styles from './ModalSlider.module.css';
import ModalDesign from './ModalDesign';

function ModalSliderContainer() {
  const {  Content } = ModalData;

    return (
        <div className={styles.container}> 
              <ModalDesign  Content={Content}/>                  
      </div>
    )
}

export default ModalSliderContainer;
