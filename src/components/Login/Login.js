import React from 'react';
import { Card, Input } from '../';


const Login = () => {

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Card>
        <form onSubmit={handleSubmit}>
          <Input label='Usuario/Email' />
          <Input label='Contraseña' />
          <button>Ingresar</button>
        </form>
      </Card>
    </div>
  );
};

export default Login;