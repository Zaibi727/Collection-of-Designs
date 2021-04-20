import React from 'react';
import Select from "react-select";
import './button.css';

const options = [
  { value: "Abe", label: "Agency (comming soon)", customAbbreviation: "Adv, connunication, event, media, pr, etc.." },
  { value: "John", label: "Brand", customAbbreviation: "Apparel, accessories, eyewear, etc.." },
  { value: "Dustin", label: "Dustin", customAbbreviation: "Restaurant, hotel, club, gym, beauty salon, etc.." },
  { value: "Dustin", label: "Talent agency/Agent (coming soon..)", customAbbreviation: "Management, modellng, scouting," },
];

const formatOptionLabel = ({ value, label, customAbbreviation }) => (
  <div style={{ display: "flex" }}>
    <div className="content">
       <h4>{label}</h4>
       <p>{customAbbreviation}</p>
    </div> 
    <div>
      <input type="radio" />
    </div>
  </div>
);


class Radio extends React.Component {
    state = { 
      selectedOption: null,
     };

     handleChange = selectedOption => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
    };

    render() { 
      const { selectedOption } = this.state;
        return ( 
            <div className="radio">
                <h3>Signing Up as</h3>
                <Select className="radio-select"
                  formatOptionLabel={formatOptionLabel}
                  options={options}
                  value={selectedOption}
                  onChange={this.handleChange}
                 />
            </div>
         );
    }
}
 
export default Radio;