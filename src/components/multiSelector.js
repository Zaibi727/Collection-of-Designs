import React from 'react';
import chroma from 'chroma-js';

import { colourOptions } from './dataOne';
import Select from 'react-select';
import './dropDown.css';


const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'White' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor:
          !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
};




function Color () {
    return (
        <div>
        <h2>Multi-Selector</h2>
  <Select
    className="multi-color-select"
    closeMenuOnSelect={false}
    defaultValue={[colourOptions[0], colourOptions[1]]}
    isMulti
    options={colourOptions}
    styles={colourStyles}
   
  /> 
</div>
);
    }

export default Color;
