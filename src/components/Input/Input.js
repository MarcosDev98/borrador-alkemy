import React from 'react';
// import './Input.css';
import { MyInput, Label, Field } from './styles.js';

const Input = ({ label, ...props }) => {
  return (
    <Field>
      <Label>{label}</Label>  
      <MyInput {...props} />
    </Field>
  );
};

export default Input;