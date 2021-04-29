import React from 'react';
import styles from './masonry.module.css';

const MRender = ({image}) => {
    return (
      <div>
              <img className={styles.img} src={image} alt="nature and politician" />
          </div>
    );
  };
 
export default MRender;