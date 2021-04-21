import { Checkbox } from '@material-ui/core';
import React, { Component } from 'react';
import Select from 'react-select';
import { stateOptions } from './ddd';
import './button.css';


const MyOption = props => {
    const { innerProps, innerRef } = props;
    console.log(innerProps);
    console.log(props);
    console.log(props.focused);
    return (
      <article ref={innerRef} {...innerProps} className="custom-option">     
        <input type="checkbox" checked={props.isSelected ? true : false} />
        <h4>{props.data.label}</h4>
      </article>
    );
  };


class Last extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="last">
                  <Select 
                     className="last-select"
                      components={{Option: MyOption}}
                      options={stateOptions}
                      openMenuOnFocus={true}
                  />
            </div>
         );
    }
}
 
export default Last;