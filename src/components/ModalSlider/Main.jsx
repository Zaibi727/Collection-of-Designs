import React, {useState} from 'react';
import ModalDesign from './ModalDesign';

export default function Main({Content}) {
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
         setIsOpen(true);
      };
    
       const hideModal = () => {
        setIsOpen(false);
      };
      const customStyles = {
        overlay: {
          backgroundColor: "rgb(0, 0, 0 , 0.1)"
        } 
      };


    return (
        <div>
        <button onClick={showModal}>Open modal to click this button</button>
            {Content.map((content) => 
                <ModalDesign 
                    key={content.id}
                    content={content}
                    showModal={showModal}
                    hideModal={hideModal}
                    isOpen={isOpen}
                    customStyles={customStyles}
                />
                )}
        </div>
    )
}
