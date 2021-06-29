import React, {useState} from 'react';
import ModalDesign from './ModalDesign';
import styles from './ModalSlider.module.css';

export default function Main({Content}) {
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
         setIsOpen(true);
      };
    
       const hideModal = () => {
        setIsOpen(false);
      };
     


    return (
        <div> 
        <button onClick={showModal}>Open modal to click this button</button>
          <div className={styles.main}>
          {Content.map((content) => 
                <ModalDesign 
                    key={content.id}
                    content={content}
                    showModal={showModal}
                    hideModal={hideModal}
                    isOpen={isOpen}
                />
                )}
          </div>
        </div>
    )
}
