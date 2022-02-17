import React from 'react';
import { Input, Button } from '../';


const SignUp = () => {

  return(
    <div>
      <Input label='Nombre' />
      <Input label='Apellido' />
      <Input label='Email' type='email' />
      <Input label='Usuario' />
      <Input label='Contraseña' type='password' />
      <Button>Registrar</Button>
    </div>
  );
};

export default SignUp;
