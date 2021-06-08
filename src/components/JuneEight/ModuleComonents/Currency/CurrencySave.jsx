import React from 'react';

import styles from './currency.module.css';
import Select from 'react-select';
import ButtonAb from '../../ButtonAb';

import { BiPound } from "react-icons/bi";

function CurrencySave(props) {

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
                   options={CuurencyOptions}
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

export default  CurrencySave;


export const CuurencyOptions = [
    { value: 'me', label: '$ USD' },
    { value: 'eu', label: 'Euro' },
    { value: 'mi', label: 'Pound' },

 
  ];