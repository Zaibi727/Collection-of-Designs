import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import styles from './reactImage.module.css';


class ImagesGallery extends Component {
    state = {  }
    render() { 
        return ( 
             <div className={styles.wrapper}>
                <div className={styles.div}>
                 <ImageGallery items={images} 
                    infinite={true}
                    lazyLoad={false}
                    showNav={true}
                    showThumbnails={true}
                    thumbnailPosition='bottom'
                    showFullscreenButton={true}
                    useBrowserFullscreen={false}
                    isRTL={false}
                    disableThumbnailScroll={false}
                    disableKeyDown={false}
                    showBullets={true}

                />
            </div>

            <div className={styles.div}>
                 <ImageGallery items={images} 
                    infinite={true}
                    lazyLoad={true}
                    showNav={true}
                    showThumbnails={true}
                    thumbnailPosition='left'
                    showFullscreenButton={true}
                    useBrowserFullscreen={false}
                    isRTL={true}
                    disableThumbnailScroll={false}
                    disableKeyDown={true}
                    showBullets={true}

                />
            </div>

            <div className={styles.div}>
                 <ImageGallery items={images} 
                    infinite={false}
                    lazyLoad={false}
                    showNav={true}
                    showThumbnails={true}
                    thumbnailPosition='right'
                    showFullscreenButton={true}
                    useBrowserFullscreen={false}
                    isRTL={false}
                    disableThumbnailScroll={false}
                    disableKeyDown={true}
                    slideInterva= '1000'
                    showBullets={true}

                />
            </div>

            <div className={styles.div}>
                 <ImageGallery items={images} 
                    infinite={false}
                    lazyLoad={false}
                    showNav={true}
                    showThumbnails={true}
                    thumbnailPosition='top'
                    showFullscreenButton={true}
                    useBrowserFullscreen={false}
                    isRTL={false}
                    disableThumbnailScroll={false}
                    disableKeyDown={true}
                    flickThreshold={0.07}
                    slideInterva= '1000'
                    showBullets={true}

                />
            </div>

            
            <div className={styles.div}>
                 <ImageGallery items={images} 
                    infinite={false}
                    lazyLoad={false}
                    showNav={false}
                    showThumbnails={false}
                    showFullscreenButton={true}
                    useBrowserFullscreen={false}
                    isRTL={false}
                    disableThumbnailScroll={false}
                    disableKeyDown={true}
                    flickThreshold={0.}
                    slideInterva= '1000'
                    showBullets={true}

                />
            </div>

            
            <div className={styles.div}>
                 <ImageGallery items={images} 
                    infinite={false}
                    lazyLoad={false}
                    showNav={true}
                    showThumbnails={true}
                    thumbnailPosition='top'
                    showFullscreenButton={true}
                    useBrowserFullscreen={false}
                    isRTL={false}
                    disableThumbnailScroll={false}
                    disableKeyDown={true}
                    slideInterva= '1000'
                    showBullets={true}

                />
            </div>

            
            <div className={styles.div}>
                 <ImageGallery items={images} 
                    infinite={false}
                    lazyLoad={false}
                    showNav={false}
                    showThumbnails={true}
                    showPlayButton={false}
                    thumbnailPosition='top'
                    showFullscreenButton={true}
                    useBrowserFullscreen={false}
                    isRTL={false}
                    disableThumbnailScroll={false}
                    disableKeyDown={true}
                    slideInterva= '1000'
                    showBullets={true}

                />
            </div>
             </div>

         );
    }
}
 
export default ImagesGallery;

const images = [
   
    {
      original: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
    {
      original: 'https://images.unsplash.com/photo-1526289636136-bce3fd37f962?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      thumbnail: 'https://images.unsplash.com/photo-1526289636136-bce3fd37f962?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },

    {
        original:  "https://images.unsplash.com/photo-1568792358202-0b9a9071b357?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI4fHxkZXNrJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        thumbnail:  "https://images.unsplash.com/photo-1568792358202-0b9a9071b357?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI4fHxkZXNrJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60/250/150",
      },
      {
        original: "https://images.unsplash.com/photo-1478815716600-15f0c3eb8e4b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        thumbnail: "https://images.unsplash.com/photo-1478815716600-15f0c3eb8e4b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        original: 'https://images.unsplash.com/photo-1510254497705-baa8e93b6a79?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        thumbnail: 'https://images.unsplash.com/photo-1510254497705-baa8e93b6a79?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },

      {
        original: 'https://images.unsplash.com/photo-1470104240373-bc1812eddc9f?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        thumbnail: 'https://images.unsplash.com/photo-1470104240373-bc1812eddc9f?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        original: 'https://images.unsplash.com/photo-1573495804683-641191e042ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMxfHx3ZWIlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        thumbnail: 'https://images.unsplash.com/photo-1573495804683-641191e042ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMxfHx3ZWIlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        original: 'https://images.unsplash.com/photo-1620135986601-da0defb11258?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        thumbnail: 'https://images.unsplash.com/photo-1620135986601-da0defb11258?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
  ];