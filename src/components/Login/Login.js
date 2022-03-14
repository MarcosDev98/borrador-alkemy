import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Input } from '../';
import useForm from '../../hooks/useForm';
import { ajaxLogin } from '../../services/ajax';

const Login = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [form, handleChange, reset] = useForm({
    username: '',
    password: '',
  });


  const handleLogin = async (e) => {
    e.preventDefault();

    ajaxLogin(form)
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.error('login_error', error));
    
    reset();
    
  };

  

  if (user) {
    window.sessionStorage.setItem('loggedUser', JSON.stringify(user));
    navigate('/');

  }

  return (
    <div>
      <Card>
        <form onSubmit={handleLogin}>
          <Input label='Usuario' name='username' value={form.username} onChange={handleChange} />
          <Input label='Contraseña' name='password' value={form.password} onChange={handleChange} />
          <button>Ingresar</button>
        </form>
      </Card>
    </div>
  );
};

export default Login;