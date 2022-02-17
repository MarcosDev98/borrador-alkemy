import React from 'react';
import { Card, SignIn, SignUp } from '../';


const Login = () => {

  const showSignIn = () => <SignIn />;

  const showSignUp = () => <SignUp />;

  return (
    <div>
      <Card>
        <button onClick={showSignUp} >Registrarme</button>
        <button onClick={showSignIn} >Ingresar</button>
      </Card>
    </div>
  );
};

export default Login;