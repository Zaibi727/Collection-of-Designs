import React from 'react'
import AbButton from './AbButton'
import { FaSuitcase } from "react-icons/fa";
import styles from './junenine.module.css';


function ButtonBr(props) {
    const {onAddOne,open,} = props;
    return (
        <div className={styles.btnBar}>

          {button.map((button, i) => (
              <div key={i} onClick={(i)=>{onAddOne(i)}} style={ open ? {color: 'white', backgroundColor: '#2fc772'} : {color: 'black'}}>
                <AbButton        
                      button={button}
                      open={open}
                     />
              </div>
          ))}
                                  
        </div>
    )
}

export default ButtonBr;


const button = [
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

