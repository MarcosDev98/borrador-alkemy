import React, { useState, useEffect } from 'react';
import { Card, List, Input, Select, Button } from '../';
import useForm from '../../hooks/useForm';
import { ajaxCreateTransaction, ajaxGetTransactions, ajaxGetTypes } from '../../services/ajax';
import { useParams } from 'react-router-dom';

const Home = () => {
  
  
  const [transactions, setTransaction] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [types, setTypes] = useState([]);
  const [form, handleChange, reset] = useForm({
    concept: '',
    amount: '',
    date: '',
    id_type_transaction: '',
  });

  const { user } = useParams();
  const { id, name, token } = user;

  console.log('from home', id, name, token);

  const submit = async (e) => {
    e.preventDefault();

    ajaxCreateTransaction(form)
      .then((data) => {
        setTransaction([...transactions, form]);
        console.log('create_transaction_data', data);
      })
      .catch((error) => console.error('create_transaction_error', error));


    reset();
  };


  const getTransactions =  () => {
    ajaxGetTransactions()
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
            <Select label='Tipo' name='id_type_transaction' value={form.id_type_transaction} types={types} onChange={handleChange} />

            <Button>Enviar</Button>
          </form>
        </div>
      </Card>
    </>
  );
};

export default Home;