import React from 'react';
import ModalData from './ModalData';
import NewModalDesign from './NewModalDesign';
import styles from './NewModal.module.css';

export default function NewModalContainer() {
    const {  Content } = ModalData;
    return (
        <div>
            <h1>New Modal Container</h1>
            <NewModalDesign 
                Content={Content}
            />
        </div>
    )
}
