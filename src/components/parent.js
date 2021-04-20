import React, { Component } from 'react';
//import Dropdown from './dropdown';
//import Try from './firstTry';
//import Monday from './reactSelect';
//import Color from './multiSelector';
//import Custom from './custom';
//import Access from './access';
//import Fixed from './fixedOption';
import Test from './twentyApril/firstRender';
import Two from './twentyApril/secondRender';
import Next from './twentyApril/nextTask/checkSelector' ;
//import Radio from './twentyApril/nextTask/radioSelector';


class Parent extends Component {

    render() { 
 

        return ( 
            <div>           
               <Next />
            </div>
         );
    }
}
 
export default Parent;
