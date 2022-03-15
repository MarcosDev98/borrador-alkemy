import React from 'react';
// import './Input.css';
import { TextInput, Label, Field } from './styles.js';

const Input = ({ label, ...props }) => {
  return (
    <Field>
      <Label>{label}</Label>  
      <TextInput {...props} />
    </Field>
  );
};

export default Input;