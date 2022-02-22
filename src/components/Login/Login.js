import React, { useState } from 'react';
import { Card, Input } from '../';
import loginService from '../../services/login';
import useForm from '../../hooks/useForm';

const Login = () => {

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState(null);
  const [form, handleChange, reset] = useForm({
    username: '',
    password: '',
  });


  const handleLogin = async (e) => {
    e.preventDefault();

    
    const user = await loginService.login({ form });
    console.log(user);
    setUser(user);
    reset();
    
  };

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