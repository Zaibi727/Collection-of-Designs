import React from 'react';
import {  iconDroper } from '../dataOne';
import '../dropDown.css';


 const updatedIcon = iconDroper.map((icon) => {
    icon.label = (
      <div className="icon-label">
        <img className="icon-resize" src={icon.label} alt="icon" />
      </div>
    );
    return icon;
  });

  export default updatedIcon;