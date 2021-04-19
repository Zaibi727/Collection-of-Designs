import React, { Component } from 'react';
import Select from 'react-select';
import {stateOptions } from './dataOne';
import './dropDown.css';



class Monday extends Component {

    render() { 
        return ( 
            <div>
                <h1>Single-Selector</h1>
                <Select className="react-select"
                  options={stateOptions}
                
                />
            </div>
         );
    }
}



export default Monday;