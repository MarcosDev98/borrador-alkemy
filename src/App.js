import React, {  } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Home, Login } from './components';


function App() {



  return (
    <div style={{ marginTop: '5%', marginBottom: '5%' }}>
      <Container>
        <Routes>
          <Route path='/:user' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
