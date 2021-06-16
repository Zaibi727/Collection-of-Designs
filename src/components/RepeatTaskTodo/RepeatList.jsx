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
    setPersons(prev => prev.map(item => (item.id === personId ? newPerson : item)));
}

const removePerson = id => {
    const removedArr = [...persons].filter(person => person.id !== id);
    setPersons(removedArr);
}

const completePerson = id => {
    let updatedPersons = persons.map(person => {
        if(person.id === id) {
           person.isComplete = !person.isComplete;
        }
        return person;
    });
    setPersons(updatedPersons);
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
            />
            <button className={styles.resetbtn} onClick={handleReset}>
                Reset Number of Persons
            </button>
            <div>
                <RepeatDateTime />
            </div>
           </div>

            <div className={styles.data}>
                <RepeatData 
                    persons={persons}
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement}
                    completePerson={completePerson}
                    updatePerson={updatePerson}
                    removePerson={removePerson}
                />
            </div>
        </div>
    )
}
