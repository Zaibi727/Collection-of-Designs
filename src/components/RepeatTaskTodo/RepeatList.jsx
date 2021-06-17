import React, {useState} from 'react';
import RepeatForm from './RepeatForm';
import RepeatDateTime from './RepeatDateTime';
import RepeatData from './RepeatData';
import styles from './repeat.module.css';


export default function RepeatList() {
   const [persons, setPersons] = useState([]);


   const AddPerson = person => {
       if(!person.text || /^\s*$/.test(person.text)){
           return;
       }

       const newPersons = [person, ...persons];
       setPersons(newPersons);
       console.log(...persons); 
   }

   
   const updatePerson = (personId, newPerson) => {
    if(!newPerson.text || /^\s*$/.test(newPerson.text)){
        return;
    }
    setPersons(prev => prev.map(item => (item.id === personId ? {...newPerson, count : item.count} : item)));
}


 /*
 const updatePerson = (id, newValue) => {
 
    let myUpdate = [ ...persons ];
            for ( let i = 0; i < myUpdate.length; i++ ) {
                const person = myUpdate[ i ];
                person.count = person.count;
                if(person.id === id){
                    person.value = newValue
                } else{
                    person.value = ''
                }
            }
            setPersons( [ ...myUpdate ] );
}
*/

const removePerson = id => {
    const removedArr = [...persons].filter(person => person.id !== id);
    setPersons(removedArr);
}



 
const handleIncrement = (id) => {
  setPersons(prev => prev.map(person => person.id === id ? { ...person, count: person.count + 1 } : person))
}

const handleDecrement = (id) => {
  setPersons(prev => prev.map(person => person.id === id ? { ...person, count: person.count - 1 } : person))
}


const handleReset = () => {
   let myPerson = [...persons];
    for(let i = 0; i < myPerson.length; i++){
       const person = myPerson[i];
        person.count = 0;
     }
    setPersons([...myPerson]);
  }
 

    return (
        <div className={styles.container}>
           <div className={styles.div1}>
           <h4>Enter Task</h4>
            <RepeatForm 
                onSubmit={AddPerson}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
            />
            <button className={styles.resetbtn} onClick={handleReset}>
                Reset Number of Persons
            </button>
            <div>
                <RepeatDateTime />
            </div>
           </div>

         
            <div className={styles.data}>
                {persons.map((person, index) => (
                    <div className={styles.datawrapper}>
                        <div>
                            <button className={styles.increment} onClick={() => handleIncrement(person.id)}>+</button>
                            <button className={styles.decrement} onClick={() => handleDecrement(person.id)}>-</button>
                        </div>
                         <div  className={styles.personCounter}>
                               <p style={{backgroundColor: person.count ? '#007bff' : 'yellow', color: person.count ? 'white' : 'black'}}>Person <span>{person.count === 0 ? 'Zero' : person.count}</span></p>
                         </div>
                         <div key={person.id}>
                               <h4>{person.text}</h4>
                         </div>
                         <div>
                               <RepeatData 
                                     index={index}
                                     person={person}
                                     updatePerson={updatePerson}
                                />
                         </div>
                          <div>
                          <button className={styles.delete} onClick={()=> removePerson(person.id)}>Delete</button>
                          </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
