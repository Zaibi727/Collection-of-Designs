import React from 'react';
import Select, { components } from 'react-select';
import '../dropDown.css';



const Tuesday = ({options}) => {
    return (
        <div>
            <Select className="countries"
                
                options={options}
                isSearchable
                isClearable
                isOptionSelected
            />
        </div>
    )
}

export default Tuesday;

