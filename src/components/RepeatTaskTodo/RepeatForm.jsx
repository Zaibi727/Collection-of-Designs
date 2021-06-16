import React, {useState, useEffect, useRef} from 'react';
import styles from './repeat.module.css';

export default function RepeatForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value: '');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
      });

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input,
            count: 0,
        })
        setInput('');
    }

    return (
        
        <form className={styles.form} onSubmit={handleSubmit}>
        {props.edit ? (
            <>
            <input
                placeholder='Update your Task'
                value={input}
                 onChange={handleChange}
                  name='text'
                   className={styles.input}
                   ref={inputRef}
              />
               <button className={styles.savebtn} onClick={handleSubmit}>
                 save
               </button>
            </>
        ): (
            <>
            <input
                placeholder='Task Name'
                value={input}
                 onChange={handleChange}
                  name='text'
                   className={styles.input}
                   ref={inputRef}
              />
               <button className={styles.addbtn} onClick={handleSubmit}>
                 Add Task
               </button>
            </>
        )}  
            </form>
    )
}
