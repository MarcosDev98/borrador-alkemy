import React from 'react';
import { Input, Button } from '../';

const SignIn = () => {
  return (
    <div>
      <Input label='Usuario/Email' />
      <Input label='Contraseña' />
      <Button>Ingresar</Button>
    </div>
  );
};

export default SignIn;
