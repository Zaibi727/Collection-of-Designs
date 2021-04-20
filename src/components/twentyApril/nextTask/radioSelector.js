import React from 'react';
import RadioSelect from 'react-radio-select';
import './button.css';



const Option = ({title, price}) => (
    <div className="coffee-option">
      <div>{title}</div>
      <div>{price}</div>
    </div>
  )

  const coffees = [
    {id: "1001", title: "Espresso", price: "1.50 €"},
    {id: "1002", title: "Cappuccino", price: "2.00 €"},
    {id: "1003", title: "Flat white", price: "2.20 €"},
    {id: "1004", title: "Americano", price: "1.80 €"},
  ];

  const options = coffees.map(item => ({
    value: item.id,
    component: <Option title={item.title} price={item.price}/>,
    ariaLabel: item.title + " " + item.price
}));

class Radio extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <form>
                      <fieldset>
                         <legend>Choose coffee</legend>
                         <RadioSelect id="coffee-selection" name="coffee" options={options} />
                      </fieldset>
                </form>
            </div>
         );
    }
}
 
export default Radio;