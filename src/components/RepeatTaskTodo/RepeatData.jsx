import React,{useState} from 'react';
import RepeatForm from './RepeatForm';
import styles from './repeat.module.css';


export default function RepeatData({person, index,updatePerson, handleIncrement, handleDecrement, removePerson}) {
   const [edit, setEdit] = useState({
       id: null,
       value: '',
   })


   const submitUpdate = (value) => {
    updatePerson(edit.id, value );
    setEdit({
        id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <RepeatForm edit={edit}  onSubmit={submitUpdate} />;
  }



    return (
        <div className={styles.datawrapper}>
           <div>
               <button className={styles.increment} onClick={() => handleIncrement(person.id)}>+</button>
               <button className={styles.decrement} onClick={() => handleIncrement(person.id)}>-</button>
           </div>
           <div  className={styles.personCounter}>
           <p style={{backgroundColor: person.count ? '#007bff' : 'yellow', color: person.count ? 'white' : 'black'}}>Person <span>{person.count === 0 ? 'Zero' : person.count}</span></p>
           </div>
           <div key={person.id}>
               <h4>{person.text}</h4>
           </div>
           <div>
               <button key={person.id} className={styles.edit} onClick={() => setEdit({id: person.id, value: person.text})}>Edit</button>
               <button className={styles.delete} onClick={()=> removePerson(person.id)}>Delete</button>
           </div>
        </div>
    )
}
