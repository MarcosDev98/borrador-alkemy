import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { Button, Input } from '../';
import useForm from '../../hooks/useForm';
import { ajaxLogin, ajaxCreateUser } from '../../services/ajax';
// eslint-disable-next-line no-unused-vars
import { Body, Container, Form, Forms, InputField, StyledInput, Title } from './styles';


const Login = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loginForm, loginHandler, resetLogin] = useForm({
    username: '',
    password: '',
  });

  // eslint-disable-next-line no-unused-vars
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

  
  // eslint-disable-next-line no-unused-vars
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
    <Body>
      <Container>
        <Forms>
          <Title>Login</Title>
          <Form onSubmit={handleLogin}>
            <InputField>
              <StyledInput label='Usuario' name='username' value={loginForm.username} onChange={loginHandler} />
            </InputField>
            <InputField>
              <StyledInput label='Contraseña' type='password' name='password' value={loginForm.password} onChange={loginHandler} />
            </InputField>
            <Button>Ingresar</Button>
          </Form>
          {/* <Form onSubmit={handleSignUp}>
            <Input label='Nombre' name='firstname' value={signUpForm.firstname} onChange={signUpHandler} />
            <Input label='Apellido' name='lastname' value={signUpForm.lastname} onChange={signUpHandler} />
            <Input label='Email' name='email' value={signUpForm.email} onChange={signUpHandler} />
            <Input label='Usuario' name='username' value={signUpForm.username} onChange={signUpHandler} />
            <Input label='Contraseña' name='password' value={signUpForm.password} onChange={signUpHandler} type='password' />
            <Button>Registrar</Button>
          </Form> */}
        </Forms>
      </Container>
    </Body>
  );
};

export default Login;