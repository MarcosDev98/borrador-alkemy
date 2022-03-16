import React from 'react';
import { MyContainer } from './styles';

const Container = ({ children }) => {
  return (
    <MyContainer>
      {children}
    </MyContainer>
  );
};

export default Container;