import React from 'react';
import './Select.css';

const Select = ({ label, types, ...props }) => {
  console.log('types:', types);
  return (
    <div className='field'>
      <label>{label}</label>  
      <select {...props}>
        {
          types.map(x => 
            <option key={x.id} value={x.id} >{x.type}</option>)}
      </select>
    </div>
  );
};

export default Select;