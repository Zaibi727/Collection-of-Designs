import React from 'react';

import styles from './time.module.css';
import Select from 'react-select';
import ButtonAb from '../../ButtonAb';


function TimeSave(props) {

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
                   options={timeOptions}
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

export default  TimeSave;


export const timeOptions = [
    { value: '2', label: '2:00 pm' },
    { value: '2', label: '4:00 pm' },
    { value: '2', label: '6:00 pm' },
    { value: '2', label: '8:00 pm' },
    { value: '2', label: '10:00 pm' },
    { value: '2', label: '12:00 am' },
    { value: '2', label: '2:00 am' },
 
  ];