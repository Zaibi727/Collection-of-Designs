import React,{useState} from 'react';
import RepeatForm from './RepeatForm';
import styles from './repeat.module.css';


export default function RepeatData({persons,updatePerson, handleIncrement, handleDecrement, removePerson,}) {
   const [edit, setEdit] = useState({
       id: null,
       value: '',
   })


   const submitUpdate = value => {
    updatePerson(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <RepeatForm edit={edit} onSubmit={submitUpdate} />;
  }

    return persons.map((person, index) => (
        <div key={index} className={styles.datawrapper}>
            <div>
                <button className={styles.increment} onClick={() => handleIncrement(person.id)}>+</button>
                <button className={styles.decrement} onClick={() => handleDecrement(person.id)}>-</button>
            </div>
            <div  className={styles.personCounter}>
                <p style={{backgroundColor: person.count ? '#007bff' : 'yellow', color: person.count ? 'white' : 'black'}}>Person <span>{person.count === 0 ? 'Zero' : person.count}</span></p>
            </div>
            <div key={person.id}>
                {person.text}
            </div>
            <div>
                <button className={styles.edit} onClick={() => setEdit({id: person.id, value: person.text})}>edit</button>
                <button className={styles.delete} onClick={() => removePerson(person.id)}>Delete</button>
            </div>
        </div>
    ))
}
