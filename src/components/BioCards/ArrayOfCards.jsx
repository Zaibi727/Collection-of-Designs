import React, { Component } from 'react';
import SingleCard from './singleCard';
import styles from './bioCards.module.css';

class ArrayOfCards extends Component {
    state = { 
        cards: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
        ]
     }




    render() { 
        return ( 
                  <div className={styles.arrayWrapper}>
                  <p className={styles.hhh}>OUR TEAM</p>
                    {this.state.cards.map(card => (
                    <SingleCard
                    key={card.id}
                    value={card.value} />
                ))}        
            </div>          
         );
    }
}
 
export default ArrayOfCards;