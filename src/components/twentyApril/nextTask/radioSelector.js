import React from 'react';
import Select, { components } from 'react-select';
import './button.css';

const options = [
  { value: "Agency", label: "Agency (comming soon)", customAbbreviation: "Adv, connunication, event, media, pr, etc.." },
  { value: "Brand", label: "Brand", customAbbreviation: "Apparel, accessories, eyewear, etc.." },
  { value: "local business", label: "Local Business", customAbbreviation: "Restaurant, hotel, club, gym, beauty salon, etc.." },
  { value: "Talent Agent", label: "Talent agency/Agent (coming soon..)", customAbbreviation: "Management, modellng, scouting," },
];



const MyOption = props => {
  const { innerProps, innerRef } = props;
  return (
    <article className="content" ref={innerRef} {...innerProps} >
        <div className="one">
            <h4>{props.data.label}</h4>
            <p>{props.data.customAbbreviation}</p>
        </div>
        <div className="two">
          <input 
          className="circle"
          type="radio"
          name='option'  
          
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

                 />
            </div>
         );
    }
}
 
export default Radio;