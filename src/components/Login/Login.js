import React, { useState } from 'react';
import { Card, SignIn, SignUp } from '../';


const Login = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Card>
        <form onSubmit={handleSubmit}>

        </form>
      </Card>
    </div>
  );
};

export default Login;