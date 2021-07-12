import React from 'react'
import DatePicker from './HorizontalCalendarContainer';
import {
    MonthPickerDropdown
  } from 'react-month-picker-dropdown'
  import 'react-month-picker-dropdown/dist/index.css';
  import './horizontal.css';

function HorizontalDisplay() {



    return (
        <div className="parent-component">
             <div className="right-div-dp">
                 <DatePicker />
             </div>
        </div>
    )
}

export default HorizontalDisplay;
