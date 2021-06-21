import React,{useState} from 'react';
import Calendar from 'react-calendar';
import styles from './calendarmodal.module.css';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import 'react-calendar/dist/Calendar.css';
import './reactCalendar.css';

export default function CalendarAb() {
    const [value, onChange] = useState(new Date());


    return (
        <div>
             <Calendar
               className='react-calendar'
             tileClassName={styles.ccc}
             nextLabel={<GrNext style={{marginRight: '-110px'}} />}
             prevLabel={<GrPrevious style={{marginLeft: '-110px'}} />}
             next2Label=''
             prev2Label=''
             className={styles.calendar}
             onChange={onChange}
             value={value}
             selectRange={true}
             tileDisabled={({ date }) => date.getDay('Sunday') === 0}
      />
        </div>
    )
}
