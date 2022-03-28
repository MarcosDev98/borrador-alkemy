import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Table, Notification } from '../';



const Home = () => {
  

  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  let loggedUser = window.sessionStorage.getItem('loggedUser');
  


  useEffect(() => {
    loggedUser = window.sessionStorage.getItem('loggedUser');

    if (loggedUser !== null) {
      const user = JSON.parse(loggedUser);
      setUser(user);
      console.log('?', user);
    }

  }, []);

  return (
    <>
      {console.log('user', user)}
      {loggedUser === null ?  navigate('/login') : <h1>Hola {user.firstname}, bienvenido.</h1>}
      <Card>
        <Table>

        </Table>
      </Card>
      
      <Notification 
        mode='error'
        title='Error'
        message='No se pudo guardar los cambios'  
      />
    </>
  );
};

export default Home;