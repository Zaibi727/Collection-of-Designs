import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel,{ Modal, ModalGateway } from 'react-images';
import { photos } from "./photos";
import styles from './reactImage.module.css';
import FooterButton from './footerButton';
import HeaderContent from './tenMayGallery';


function ModernGallery() {
  const [currentImage, setCurrentImage] = useState(1);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
   setCurrentImage(index);
   setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(1);
    setViewerIsOpen(false);
  };

  return (
    <div className={styles.www}> 
    <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal className={styles.white} onClose={closeLightbox}>
             <Carousel
             components={{ Header: HeaderContent }}
              components={{ Footer: FooterButton, Header: HeaderContent }}
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
              
            />
          </Modal>
        ) : null}     
      </ModalGateway>
    </div>
  );
}
export default ModernGallery;
