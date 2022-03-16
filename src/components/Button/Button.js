import React from 'react';
// import './Button.css';
import { MyButton } from './styles.js';

const Button = ({ children }) => {
  return (
    <MyButton>
      {children}
    </MyButton>
  );
};

export default Button;