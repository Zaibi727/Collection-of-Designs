import React,{useState} from 'react';
import ProfileData from './ProfileData';
import ProfileAbstract from './ProfileAbstract';
import styles from './ProfileCards.module.css';




export default function ProfileContainer() {
    const [selected, setSelected] = useState('');
    const {datas} = ProfileData;


    return (
        <div>
          <p>12:00 - 15:00  . <span>Icon 8</span></p>
            <div className={styles.maindesign}>
            {datas.map((data, index) => (
                        <div  key={index} className={styles.btnrow}>
                            <div className={styles.buttonPanel}>
                            <img className={styles.img} src={data.image}/>
                            <p  className={styles.name}>{data.name}</p><br></br>
                             <span></span>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}
