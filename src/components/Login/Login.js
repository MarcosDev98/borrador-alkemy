import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from '../';
import useForm from '../../hooks/useForm';
import { ajaxLogin, ajaxCreateUser } from '../../services/ajax';
import './Login.css';

const Login = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loginForm, loginHandler, resetLogin] = useForm({
    username: '',
    password: '',
  });

  const [signUpForm, signUpHandler, resetSignUp] = useForm({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
  })
;
  const handleLogin = async (e) => {
    e.preventDefault();

    ajaxLogin(loginForm)
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.error('login_error', error));
    
    resetLogin();
    
  };

  
  const handleSignUp = (e) => {
    e.preventDefault();

    ajaxCreateUser(signUpForm)
      .then()
      .catch((error) => console.error('signup_error', error));

    resetSignUp();

  };


  if (user) {
    window.sessionStorage.setItem('loggedUser', JSON.stringify(user));
    navigate('/');

  }

  return (
    <div className='body'>
      <div className='container'>
        <div className='forms'>

          <form onSubmit={handleLogin}>
            <Input label='Usuario' autoComplete={true} name='username' value={loginForm.username} onChange={loginHandler} />
            <Input label='Contraseña' type='password' name='password' value={loginForm.password} onChange={loginHandler} />
            <Button>Ingresar</Button>
          </form>
          <form onSubmit={handleSignUp}>
            <Input label='Nombre' name='firstname' value={signUpForm.firstname} onChange={signUpHandler} />
            <Input label='Apellido' name='lastname' value={signUpForm.lastname} onChange={signUpHandler} />
            <Input label='Email' name='email' value={signUpForm.email} onChange={signUpHandler} />
            <Input label='Usuario' name='username' value={signUpForm.username} onChange={signUpHandler} />
            <Input label='Contraseña' name='password' value={signUpForm.password} onChange={signUpHandler} type='password' />
            <Button>Registrar</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;