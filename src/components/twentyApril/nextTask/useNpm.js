import React from 'react';
import Select from "react-select";
import './button.css';

const options = [
    { label: "Punjabi ", value: "pu" },
    { label: "Urdu ", value: "ur" },
    { label: "Sindhi ", value: "sind",},
    { label: "Pashtu ", value: "pa" },
    { label: "Balochi ", value: "balo" },
    { label: "Sarieki ", value: "spr" },
    { label: "English ", value: "eng" },
    { label: "Spanish", value: "span" },
    { label: "Arabic ", value: "arrabic" },
  ];


  const MyOption = props => {
    const { innerProps, innerRef, } = props;
    console.log(innerProps);
    console.log(props);
    console.log(props.focused);
    return (
      <article ref={innerRef} {...innerProps} className="custom-option">          
           <input type="checkbox" checked={props.isSelected ? true : false} />
           <h4>{props.data.label}</h4>
      </article>
    );
  };

  
  function Check () { 
    
          return ( 
              <div className="npm">
                  <Select 
                      className="npm-select"
                      components={{Option: MyOption}}
                      options={options}   
                      isMulti  
                      focused= {true}           
                  />
              </div>
           );
      }
   
  export default Check;