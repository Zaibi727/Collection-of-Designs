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
        <div >
           <div>
               <button key={person.id} className={styles.edit} onClick={() => setEdit({id: person.id, value: person.text})}>Edit</button>            
           </div>
        </div>
    )
}
