import React, { useState, useEffect } from 'react';
import { Card, List, Input, Select, Button } from '../';
import useForm from '../../hooks/useForm';
import { ajaxCreateTransaction, ajaxGetTransactions, ajaxGetTypes } from '../../services/ajax';

const Home = () => {
  
  
  const [transactions, setTransaction] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [types, setTypes] = useState([]);
  const [form, handleChange, reset] = useForm({
    concept: '',
    amount: '',
    date: '',
    type: '',
  });


  const submit = async (e) => {
    e.preventDefault();
    setTransaction([
      ...transactions,
      form
    ]);

    ajaxCreateTransaction(form);


    reset();
  };


  const getTransactions =  () => {
    ajaxGetTransactions()
      .then((data) => {

        setTransaction(data);

      })
      .catch((error) => {
        console.error(error);
      });
         
      
  };


  const getTypes = () => {
    ajaxGetTypes()
      .then((data) => {

        setTypes(data);
      })
      .catch((error) => {
        console.error(error);
      });
    
  };

  useEffect(() => {
    getTransactions();
    getTypes();
  }, []);

  return (
    <>
      <Card>
        <List transactions={transactions} />
      </Card><Card>
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
    </>
  );
};

export default Home;