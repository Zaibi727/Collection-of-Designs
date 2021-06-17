import React from 'react';
import styles from './ProfileCards.module.css';

export default function ProfileAbstract({data, selected, handleCheck}) {
    return (
        <div>
            <div  style={{ color: data.id === selected ? 'red' : 'black', backgroundColor: data.id === selected ? 'red' : 'white' }}>
                <img className={styles.img} src={data.image}/>
                <p onClick={() => handleCheck(data.id)} className={styles.name}>{data.name}</p><br></br>
                <span></span>
            </div>
        </div>
    )
}
