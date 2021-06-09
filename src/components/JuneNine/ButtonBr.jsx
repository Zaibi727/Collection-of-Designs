import React from 'react'
import AbButton from './AbButton'
import { FaSuitcase } from "react-icons/fa";
import styles from './junenine.module.css';

function ButtonBr(props) {
    const {onAdd} = props;
    return (
        <div className={styles.btnBar}>
            {sideItems.map((item, i) => (
                   <div key={i}>
                   <AbButton 
                        item={item}
                        onAdd={(i) => onAdd(i)}
                     />
                   </div>
                ))}
        </div>
    )
}

export default ButtonBr;


const sideItems = [
    {   
        label: "Investment Plan 1",
        Icon: <FaSuitcase />,
    },
    {  
        label: "Investment Plan 2",
        Icon: <FaSuitcase />,
    },
    {   
        label: "Investment Plan 3",
        Icon: <FaSuitcase />,
    },
    {   
        label: "Investment Plan 4",
        Icon: <FaSuitcase />,
    },
]
