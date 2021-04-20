import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import './button.css';


const Next = () => {
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

  

  const [selected, setSelected] = useState([]);

  return (
    <div className="next">
      <h1>Select Languages</h1>
      <MultiSelect
        className="muu"
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        overrideStrings
        hasSelectAll={false}
        ClearIcon
      />
    </div>
  );
};

export default Next;

