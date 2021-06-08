import React from 'react';
import ButtonAb from '../../ButtonAb';
import styles from './language.module.css';
import Select from 'react-select';


function LanguageSave(props) {

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
                   options={languageOptions}
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

export default LanguageSave;

export const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'ur', label: 'Urdu' },
    { value: 'pa', label: 'Pashtu' },
    { value: 'ar', label: 'Arabic' },
    { value: 'si', label: 'Sindhi' },
    { value: 'ba', label: 'Balochi' },
    { value: 'pu', label: 'Punjabi' },
 
  ];