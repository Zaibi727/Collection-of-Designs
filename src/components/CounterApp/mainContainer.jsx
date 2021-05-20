import React, { Component } from 'react';
import NavBar from './navbar';
import CountersContainer from './countersCointainer';

class MainContainer extends Component {
    state = { 
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
     }

     handleReset = () => {
         const counters = this.state.counters.map( c => {
             c.value= 0;
             return c;
         })   
         this.setState({counters}) ; 
        };

        handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index]= {...counter}
        counters[index].value++;
        console.log(this.state.counters[0]);
        this.setState({counters})
        }


      handleDelete = counterId => {
          const counters = this.state.counters.filter(c => c.id !== counterId);
          this.setState({ counters})
        }


    render() { 
        return ( 
            <div>
                <NavBar totalCounters={this.state.counters.filter( c => c.value > 0).length} />
                <main className="container">
                    <CountersContainer 
                    counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                    />
                </main>
            </div>
         );
    }
}
 
export default MainContainer;