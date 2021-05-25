import React from 'react';
import AbstractContent from './AbstractContent'
import styles from './Udacity.module.css';


export default function AbstractCard(props) {
    const {contents} = props;
    return (
        <div className={styles.AbCard}>
            {contents.map((content) => 
               <AbstractContent
                   key={content.id}
                   content={content}
               />
            )}
        </div>
    )
}
