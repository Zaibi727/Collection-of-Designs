
import React,{useState} from 'react';
import Select from 'react-select';
import './button.css';


const options = [
  {  value: "Agency", label: "Agency (comming soon)", customAbbreviation: "Adv, connunication, event, media, pr, etc.." ,isdisabled: true },
  {  value: "Brand", label: "Brand", customAbbreviation: "Apparel, accessories, eyewear, etc.." },
  {  value: "local business", label: "Local Business", customAbbreviation: "Restaurant, hotel, club, gym, beauty salon, etc.." },
  {  value: "Talent Agent", label: "Talent agency/Agent (coming soon..)", customAbbreviation: "Management, modellng, scouting,", isdisabled: true },
];



const MyOption = props => {
  const { innerProps, innerRef } = props;
  console.log(innerProps);
  console.log(props);
  console.log(props.focused);
  return (
    <article className="content" ref={innerRef} {...innerProps} >
        <div className="one">
            <h4 >{props.data.label}</h4>
            <p>{props.data.customAbbreviation}</p>
        </div>
        <div className="two">
        <input  
            className="circle" 
            type="radio" 
            checked={props.isSelected ? true : false} 
        />
          
        </div>
     </article>
  );
};




class Radio extends React.Component {

    render() { 
        return ( 
            <div className="radio">
                <h3>Signing Up as</h3>
                <Select className="radio-select"
                  components={{Option: MyOption}}
                  options={options}
                  isClearable
                  isOptionDisabled={(option) => option.isdisabled}
                 />
            </div>
         );
    }
}
 
export default Radio;