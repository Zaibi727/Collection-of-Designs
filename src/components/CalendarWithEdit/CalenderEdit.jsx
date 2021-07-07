import React,{useState} from 'react';
import { Calendar } from "react-multi-date-picker"
import styles from './calendaredit.module.css';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import 'react-calendar/dist/Calendar.css';
import './calendaredit.css';
import { mockComponent } from 'react-dom/cjs/react-dom-test-utils.production.min';

export default function CalenderEdit() {
    const [value, setValue] = useState(new Date())


    return (
        <div className={styles.calendaerab}>
        <Calendar 
        className={styles.mdp}
          value={value}
          onChange={setValue}
          multiple
          showOtherDays={true}
          dayClassName={date => date.getTime() === new Date('22/6/2021').getTime() ? 'disabled-date' : undefined}
          />
        </div>
    )
}