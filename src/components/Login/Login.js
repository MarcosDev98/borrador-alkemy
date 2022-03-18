import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { Button } from '../';
import useForm from '../../hooks/useForm';
import { ajaxLogin, ajaxCreateUser } from '../../services/ajax';
// eslint-disable-next-line no-unused-vars
import { A, Body, BlockButton, Checkbox, CheckboxArea, CheckboxContent, Container, Form, FormContainer, Forms, I, InputField, Label, LoginSignup, RightIcon, Span, StyledInput, Title } from './styles';


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

  const showHidePassword = (e) => {
    // eslint-disable-next-line no-unused-vars

    console.log(e.target.class);

    if (e.target.parentElement.childNodes[0].children[1].type === 'password') {
      e.target.parentElement.childNodes[0].children[1].type = 'text';
      // cambiar icono.
      e.target.className.replace('uil uil-eye-slash', 'uil uil-eye');
    } else {
      e.target.parentElement.childNodes[0].children[1].type = 'password';
      // volver a cambiar icono.
      e.target.class.replace('uil uil-eye', 'uil uil-eye-slash');
    }

  };
  



  return (
    <Body>
      <Container id='container' >
        <Forms>
          <FormContainer>
            <Form onSubmit={handleLogin}>
              <Title>Login</Title>
              <InputField>
                <StyledInput label='Usuario' name='username' value={loginForm.username} onChange={loginHandler} />
              </InputField>
              <InputField>
                <StyledInput id='pwField1' label='Contraseña' type='password' name='password' value={loginForm.password} onChange={loginHandler} className='password' />
                <RightIcon onClick={showHidePassword} name='showHidePw' className="uil uil-eye-slash"></RightIcon>
              </InputField>
              <BlockButton>Ingresar</BlockButton>
              <LoginSignup>
                <Span>No estas registrado?</Span>
                <A href='#'>Registrarse</A>
              </LoginSignup>
            </Form>
            
            <Form onSubmit={handleSignUp}>
              <Title>Registro</Title>
              <InputField>
                <StyledInput label='Nombre' name='firstname' value={signUpForm.firstname} onChange={signUpHandler} />
              </InputField>
              <InputField>
                <StyledInput label='Apellido' name='lastname' value={signUpForm.lastname} onChange={signUpHandler} />
              </InputField>
              <InputField>
                <StyledInput label='Email' name='email' value={signUpForm.email} onChange={signUpHandler} />
              </InputField>
              <InputField>
                <StyledInput label='Usuario' name='username' value={signUpForm.username} onChange={signUpHandler} />
              </InputField>
              <InputField>
                <StyledInput id='pwField2' label='Contraseña' name='password' value={signUpForm.password} onChange={signUpHandler} type='password' className='password' />
                <RightIcon onClick={showHidePassword} name='showHidePw' className="uil uil-eye-slash "></RightIcon>
              </InputField>
              <BlockButton>Registrar</BlockButton>
            </Form>
          </FormContainer>
        </Forms>
      </Container>
    </Body>
  );
};

export default Login;