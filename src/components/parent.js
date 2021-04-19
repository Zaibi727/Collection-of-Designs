import React, { Component } from 'react';
//import Dropdown from './dropdown';
import Try from './firstTry';
import Monday from './reactSelect';
import Color from './multiSelector';
//import Custom from './custom';
import Access from './access';
import Fixed from './fixedOption';




class Parent extends Component {

    render() { 
 

        return ( 
            <div>           
            <Monday />
            <Color />
            <Access />
            <Fixed />
            <Try />
            </div>
         );
    }
}
 
export default Parent;
