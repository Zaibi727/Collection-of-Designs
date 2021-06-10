import React from 'react'
import AbButton from './AbButton'
import { FaSuitcase } from "react-icons/fa";
import styles from './junenine.module.css';

function ButtonBr(props) {
    const {onAddOne,onAddTwo,onAddThree,onAddFour,open, opeen, opeeen, opeeeen} = props;
    return (
        <div className={styles.btnBar}>
            
            <div onClick={onAddOne} style={ open ? {color: 'white', backgroundColor: '#2fc772'} : {color: 'black'}}>
                 <AbButton 
                      label= "Investment Plan 1"
                       Icon= {FaSuitcase}
                     />
            </div>
            <div onClick={onAddTwo} style={ opeen ? {color: 'white', backgroundColor: '#2fc772'} : {color: 'black'}}>
                 <AbButton 
                      label= "Investment Plan 2"
                       Icon= {FaSuitcase}
                     />
            </div>
            <div onClick={onAddThree} style={ opeeen ? {color: 'white', backgroundColor: '#2fc772'} : {color: 'black'}}>
                 <AbButton 
                      label= "Investment Plan 3"
                       Icon= {FaSuitcase}
                     />
            </div>
            <div onClick={onAddFour} style={ opeeeen ? {color: 'white', backgroundColor: '#2fc772'} : {color: 'black'}}>
                 <AbButton 
                      label= "Investment Plan 4"
                       Icon= {FaSuitcase}
                     />
            </div>
                            
        </div>
    )
}

export default ButtonBr;


