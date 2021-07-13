import React,{useState, useEffect} from 'react';
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

function Htask({endDate, selectDate, getSelectedDay, color, labelFormat}) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const startDate = new Date();
    const lastDate = addDays(startDate, endDate || 900);
    const primaryColor = color || 'black';
    const labelColor= {color: primaryColor};
     const date = selectedDate.getFullYear() + '-' + (selectedDate.getMonth() + 1) + '-' + (selectedDate.getDate());
     const selectedStyle = {fontWeight:"bold",width:"50px",height:"30px",borderRadius:"20px",border:`2px solid ${primaryColor}`,color:primaryColor};


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



     function daysA()  {
        const firstSection = {marginLeft: '100px'};
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
                         style={getStyles(addDays(month, j))}
                         className={styles.dateDayItem}
                         onClick={() => onDateClick(addDays(month, j))}
                         
                    >
                        <div className={styles.dayLabel}>
                            {format(addDays(month, j), dayFormat)}
                        </div>
                        <div className={styles.dateLabel}>
                            {format(addDays(month, j), dateFormat)}
                        </div>
                    </div>
                );
            } 
            months.push(
                <div  key={month}  className={styles.month} className={styles.monthContainer}>
                   <span className={styles.monthYearLabel} style={labelColor} style={firstSection}>                
                        {format(month, labelFormat || "MMMM yyyy")}
                   </span>           
                    <div className={styles.daysContainer} style={i===0?firstSection:null}>
                        {days}
                    </div>         
                </div>
            );
            days = [];
        }   
        return <div  id={"container"} className={styles.dateListScrollable}>{months}</div>
     }

     const onDateClick = day => {
        setSelectedDate(day);
        if (getSelectedDay) {
            getSelectedDay(day);
        }
    };

    useEffect(() => {
        if (getSelectedDay) {
            if (selectDate) {
                getSelectedDay(selectDate);
            } else {
                getSelectedDay(startDate);
            }
        }
    }, []);

    useEffect(() => {
        if (selectDate) {
            if (!isSameDay(selectedDate, selectDate)) {
                setSelectedDate(selectDate);
                setTimeout(() => {
                    let view = document.getElementById('selected');
                    if (view) {
                        view.scrollIntoView({behavior: "smooth", inline: "center", block: "nearest"});
                    }
                }, 20);
            }
        }
    }, [selectDate]);
    
     
    return (
        <div className={styles.container}>
            {daysA()}
        </div>
    )
}

export default Htask;



