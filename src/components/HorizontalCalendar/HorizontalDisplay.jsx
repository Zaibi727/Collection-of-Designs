import React from 'react'
import DatePicker from './HorizontalCalendarContainer';
import {
    MonthPickerDropdown
  } from 'react-month-picker-dropdown'
  import 'react-month-picker-dropdown/dist/index.css';
  import './horizontal.css';

function HorizontalDisplay() {

    const handleAMonthChange = (event) => {
        console.log(event)
      }
     
      const getMarkUpForOkButton = () => {
        return (
          <button className='button'> Select Me</button>
        )
      }
     
      const getMarkUpForCancelButton = () => {
        return (
          <button className='button'> Cancel Me</button>
        )
      }

    return (
        <div className="parent-component">
             <div className="left-dp">
             <div className="dropdown-demo">
      <MonthPickerDropdown
        CTabIndex={3}
        label="Select Months"
        searchTextLabel="Filter the months by typing here"
        startYear={2018}
        startMonth={1}
        endYear={2021}
        endMonth={5}
        displayShortMonthName={true}
        displayShortYearName={false}
        hideCheckBox={true}
        displayOkAndCancelButton={false}
        markUpForOkButton={getMarkUpForOkButton}
        markUpForCancelButton={getMarkUpForCancelButton}
        onChange={handleAMonthChange}
      />
    </div>
             </div>
             <div className="right-div-dp">
                 <DatePicker />
             </div>
        </div>
    )
}

export default HorizontalDisplay;
