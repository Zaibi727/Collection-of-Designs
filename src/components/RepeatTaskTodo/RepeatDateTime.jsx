import React, {useState, useEffect} from 'react';
import styles from './repeat.module.css';


export default function RepeatDateTime() {
    const [date, setDate] = useState(new Date());

     useEffect(() => {
         const timer = setInterval(() => setDate(new Date()), 1000)
         return function cleanup(){
             clearInterval(timer);
         }
     })

    return (
        <div className={styles.datetime}>
            <p>{date.toLocaleDateString()}, {date.toLocaleTimeString()}</p>
        </div>
    )
}
