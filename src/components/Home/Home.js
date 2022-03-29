import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Table } from '../';



const Home = () => {
  
  
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  let loggedUser = window.sessionStorage.getItem('loggedUser');
  

  const checkLogin = () => {

    if (loggedUser === null) {
      navigate('/login');
    } else {
      setUser(JSON.parse(loggedUser));
    }

  };


  useEffect(() => {
    loggedUser = window.sessionStorage.getItem('loggedUser');

    checkLogin();

  }, []);

  return (
    <>
      <Card>
        <Table />
      </Card>
    </>
  );
};

export default Home;