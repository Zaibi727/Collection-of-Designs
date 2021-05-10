import React, { Component, Fragment } from 'react';
//import Gallery from "react-photo-gallery";
import Carousel,{ Modal, ModalGateway } from 'react-images';
import { photos } from "./photos";
import styles from './reactImage.module.css';
import FooterButton from './footerButton';

class Button extends Component {
    state = { 
        modalIsOpen: true
    }

toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }))
}

    render() { 
        const { modalIsOpen } = this.state;
        return ( 
            <div>
            <ModalGateway >
            {modalIsOpen ? (
              <Modal  onClose={this.toggleModal}>
                <Carousel 
                className={styles.buttonC}
                views={photos} 
                    components={{ Footer: FooterButton }}
                />
              </Modal>
            ) : null}
          </ModalGateway>
          </div>
         );
    }
}
 
export default Button;