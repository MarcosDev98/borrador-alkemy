import React from 'react';
import { MyCard } from './styles';


const Card = ({ children }) =>  {
  return (
    <MyCard>
      {children}
    </MyCard>
  );
};

export default Card;