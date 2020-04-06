import React from "react";
import "../App.css";

function RadioGroup({ name, handleChange, values }) {
  return (
    <div> 
        {
        values.map(item =>
        <div className="radioGroup">
          <input type="radio" className="radio" value={item.value} name={name} onClick={handleChange} />
          <label className="radioLabel" htmlFor={item.value}>{item.label}</label>
        </div>
        )
        }
      
    </div>
  );
}

export default RadioGroup;
