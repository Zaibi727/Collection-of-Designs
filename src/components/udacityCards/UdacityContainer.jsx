import React from 'react';
import styles from './Udacity.module.css';
import AbstractCard from './AbstractCard';
import data from './data';


export default function UdacityContainer() {
    const {contents} = data;
    return (
        <div>
            <AbstractCard 
                contents={contents}
            />
        </div>
    )
}
