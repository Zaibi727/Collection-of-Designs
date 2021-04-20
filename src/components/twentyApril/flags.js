import React from 'react';
import { iconOptions } from '../dataOne';
import '../dropDown.css';


 const updatedCountries = iconOptions.map((icon) => {
    icon.label = (
      <div className="flag-label">
        <span>{icon.label}</span>
        <img src={icon.flag} alt="flag" />
      </div>
    );
    return icon;
  });

  export default updatedCountries;