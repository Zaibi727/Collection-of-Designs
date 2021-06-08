import React from 'react';

import styles from './distance.module.css';
import Select from 'react-select';
import ButtonAb from '../../ButtonAb';


function DistanceSave(props) {

    const style = {
        control: base => ({
          ...base,
          border: 0,
          // This line disable the blue border
          boxShadow: "none",
          width: '100%',
          
        })
      };


    return (
        <div className={styles.langague}>
            <div>
            <Select
                className={styles.langSelect}
                   options={distanceOptions}
                   styles={style}
                   components={{
                      IndicatorSeparator: () => null
                     }}
      />
            </div>
            <div onClick={props.onClick}>
                <ButtonAb
                    label="Save"
                />
            </div>
        </div>
    )
}

export default  DistanceSave;


export const distanceOptions = [
    { value: 'me', label: 'Meter' },
    { value: 'fee', label: 'Feet' },
    { value: 'mi', label: 'Milimetr' },
    { value: 'ki', label: 'Kilometer' },
    { value: 'in', label: 'Inch' },
    { value: 'ce', label: 'Centemeter' },
    { value: 'sc', label: 'scale' },
 
  ];