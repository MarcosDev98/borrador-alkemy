import React, { useState, useEffect } from 'react';
import { Card, Input, Select, Button } from './'; 
import { ajaxCreateTransaction, ajaxGetTransactions, ajaxGetTypes } from '../../services/ajax';

import useForm from '../../hooks/useForm';
const FormTransaction = () => {

  const [transactions, setTransaction] = useState([]);
  const [user, setUser] = useState(null);
  const [types, setTypes] = useState([]);
  const [form, handleChange, reset] = useForm({
    concept: '',
    amount: '',
    date: '',
    id_type_transaction: ''
  });

  let loggedUser = '';


  const handleSubmit = async (e) => {
    e.preventDefault();

    
    ajaxCreateTransaction(form, user.token)
      .then((data) => {
        setTransaction([...transactions, form]);
        console.log('create_transaction_data', data);
        getTransactions();
      })
      .catch((error) => console.error('create_transaction_error', error));


    reset();
  };

  const getTransactions =  () => {
    ajaxGetTransactions(loggedUser.token)
      .then((data) => {

        setTransaction(data);

      })
      .catch((error) => {
        console.error('get_transactions_error', error);
      });
      
  };

  const getTypes = () => {
    ajaxGetTypes()
      .then((data) => {

        setTypes(data);
      })
      .catch((error) => {
        console.error('get_types_error', error);
      });
    
  };

  useEffect(() => {
    getTypes();
    loggedUser = window.sessionStorage.getItem('loggedUser');
    setUser(loggedUser);
  }, []);

  return (
    <Card>
      <div style={{ padding: 20 }}>
        <form onSubmit={handleSubmit}>
          <Input label='Concepto' name='concept' value={form.concept} onChange={handleChange} />
          <Input label='Monto' name='amount' value={form.amount} onChange={handleChange} />
          <Input label='Fecha' name='date' value={form.date} onChange={handleChange} />
          <Select label='Tipo' name='id_type_transaction' value={form.id_type_transaction} types={types} onChange={handleChange} />

          <Button>Enviar</Button>
        </form>
      </div>
    </Card>
  );
};

export default FormTransaction;