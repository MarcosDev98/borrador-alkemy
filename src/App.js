import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Input, List, Select } from './components';
import useForm from './hooks/useForm';


function App() {

  const [transactions, setTransaction] = useState([]);
  const [types, setTypes] = useState([]);
  const [form, handleChange, reset] = useForm({
    concept: '',
    amount: '',
    date: '',
    type: '',
  });

  const  submit = async (e) => {
    e.preventDefault();
    setTransaction([
      ...transactions,
      form,
    ]);

    const response = await fetch('http://localhost:5005/transaction/add', form);

    const data = await response.json();
    console.log(data);

    reset();
  };

  const getTransactions = async () => {
    const response = await fetch('http://localhost:5005/transaction/all');
    const data = await response.json();
    setTransaction(data);
    console.log(data);
  };

  const getTypes = async () => {
    const response = await fetch('http://localhost:5005/types/all');
    const data = await response.json();
    setTypes(data);

  };

  useEffect(() => {
    getTransactions();
    getTypes();
  },[]);

  console.log(types);
  return (
    <div style={{ marginTop: '5%' }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <form onSubmit={submit}>
              <Input label='Concepto' name='concept' value={form.concept} onChange={handleChange} />
              <Input label='Monto' name='amount' value={form.amount} onChange={handleChange} />
              <Input label='Fecha' name='date' value={form.date} onChange={handleChange} />
              <Select label='Tipo' name='type' value={form.type} types={types} onChange={handleChange} />
        
              <Button>Enviar</Button>
            </form>
          </div>
        </Card>
        <Card>
          <List transactions={transactions} />
        </Card>
      </Container>
    </div>
  );
}

export default App;
