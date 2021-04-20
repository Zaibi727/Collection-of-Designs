import React from 'react';
import Select from 'react-select';
import '../dropDown.css';


const Second = ({options}) => {
    return (
        <div>
            <Select className="icoSelector"
                options={options}
                placeholder="Customize"
            />
        </div>
    )
}

export default Second;
