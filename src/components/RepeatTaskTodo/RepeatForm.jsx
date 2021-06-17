import React, {useState, useEffect, useRef} from 'react';
import styles from './repeat.module.css';

export default function RepeatForm({onSubmit, edit, persons, handleIncrement, handleDecrement}) {
    const [input, setInput] = useState(edit ? edit.value: '');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
      });

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();

        onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            count: 0,
        })
        setInput('');
    }

    return (
        
        
        
        <form className={styles.form} onSubmit={handleSubmit}>
        {edit ? (
           <div>
              
           <div>
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
            </div>
           </div>
        ): (
            <div>
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
            </div>
        )}  
            </form>
    )
}
