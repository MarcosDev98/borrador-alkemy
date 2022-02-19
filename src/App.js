import React, {  } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Home, Login } from './components';


function App() {


  const user = true;

  return (
    <div style={{ marginTop: '5%', marginBottom: '5%' }}>
      <Container>
        <Routes>
          <Route path='/' element={() => {
            return user ? <Home /> : <Login />;
          }} />
          
        </Routes>
      </Container>
    </div>
  );
}

export default App;
