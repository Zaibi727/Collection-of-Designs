import React, { Component } from 'react';
import styles from './adminPanel.module.css';



const AdminPanelAbstract = (props) => {
    const { label1,label2, src } = {...props }
        return ( 
            <div>
                <p>{label1}</p>
                <img className={styles.matesImg} src={src} />
                <img className={styles.matesImg} src={src} />
                <img className={styles.matesImg} src={src} />
                <img className={styles.matesImg} src={src} />
                <p>{label2}</p>
            </div>
         );
    }

 
export default AdminPanelAbstract;