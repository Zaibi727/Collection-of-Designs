import React, { Component } from 'react';
import { colourOptions } from './dataOne';
import AsyncSelect from 'react-select/async';
import './dropDown.css';
  
  const filterColors = (inputValue: '') => {
    return colourOptions.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
  
  const promiseOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterColors(inputValue));
      }, 1000);
    });

class Access extends Component {
    state = { inputValue: '' };
    handleInputChange = (newValue: '') => {
      const inputValue = newValue.replace(/\W/g, '');
      this.setState({ inputValue });
      return inputValue;
    };


    render() { 
        return ( 
            <div>
            <h2>
               To Fetch Data from remote source
            </h2>
                <AsyncSelect 
                  className="access"
                  cacheOptions 
                  defaultOptions 
                  loadOptions={promiseOptions} 
                  isClearable  
                  isSearchable  
                  />
            </div>
         );
    }
}
 
export default Access;