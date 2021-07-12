import React,{useState} from 'react';
import styles from './htask.module.css';
import {
    addDays,
    addMonths,
    differenceInMonths,
    format,
    isSameMonth,
    isSameDay,
    lastDayOfMonth,
    startOfMonth
} from "date-fns";

function Htask({endDate,  labelFormat, color}) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selected, setSelected] = useState(null);
    const startDate = new Date();
    const lastDate = addDays(startDate, endDate || 900);
    const primaryColor = color || 'black';
    const labelColor= {color: primaryColor};
     const date = selectedDate.getFullYear() + '-' + (selectedDate.getMonth() + 1) + '-' + (selectedDate.getDate());
     const selectedStyle = {fontWeight:"bold",width:"40px",height:"10px",borderRadius:"20px",border:`1px solid ${primaryColor}`,color:primaryColor};


     const getStyles = (day) => {
        if (isSameDay(day, selectedDate)) {
            return(selectedStyle);
        }
        return null
    };

    const getId = (day) => {
        if (isSameDay(day, selectedDate)) {
            return ('selectedDate')
        } else {
            return ("")
        }
    };

    const getMonth = (month) => {
       setSelected({selected: month});
    }

  


     function daysA()  {
        const firstSection = {marginLeft: '40px'};
        const dayFormat = "E";
        const dateFormat = "d";
        let months = [];
        let days = [];
        for (let i = 0; i <= differenceInMonths(lastDate, startDate); i++) {
            let start, end;
            const month = startOfMonth(addMonths(startDate, i));
            start = i === 0 ? Number(format(startDate, dateFormat)) - 1 : 0;
            end = i === differenceInMonths(lastDate, startDate) ? Number(format(lastDate, "d")) : Number(format(lastDayOfMonth(month), "d"));
          
            for (let j = start; j < end; j++) {
                days.push(
                    <div 
                         id={`${getId(addDays(startDate, j))}`}
                         key={addDays(month, j)}
                         
                    >
                        <div>
                            {format(addDays(month, j), dayFormat)}
                        </div>
                        <div>
                            {format(addDays(month, j), dateFormat)}
                        </div>
                    </div>
                );
            } 
            months.push(
                <div  key={month} className={styles.month}>
                   <div>
                      <h1>
                        {format(month, labelFormat || "MMMM yyyy")}
                      </h1>
                   </div>
                    <div style={i===0 ? firstSection:null}>
                        {days}
                    </div>     
                </div>
            );
            days = [];
        }   
        return (
           <div id={"container"} className={styles.id}>
              <p>{months}</p>
           </div>);
     }
    
     
    return (
        <div className={styles.ww}>
            <h4>{daysA()}</h4>
        </div>
    )
}

export default Htask;



