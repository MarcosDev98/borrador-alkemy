import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Home } from './components';


function App() {

  
  return (
    <div style={{ marginTop: '5%', marginBottom: '5%' }}>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          
        </Routes>
      </Container>
    </div>
  );
}

export default App;
