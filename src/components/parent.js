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
//import Next from './twentyApril/nextTask/checkSelector' ;
//import Radio from './twentyApril/nextTask/radioSelector';
//import Check from './twentyApril/nextTask/useNpm';
//import Last from './twentyApril/nextTask/lastSelector';
//import Card from './twentyOne/card';
import Companyr from './twentyTwo/company/companyRender'
import Walletr from './twentyTwo/wallet/walletRender';
import Sources from './twentyTwo/source/sourceRender';

class Parent extends Component {

    render() { 
 

        return ( 
            <div className="aaj">
            <div className="div">
               <Companyr />
            </div>
            <div className="div">
                <Walletr />
            </div>
            <div className="div">
                <Sources />
            </div>         
            </div>
         );
    }
}
 
export default Parent;
