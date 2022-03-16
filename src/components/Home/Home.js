import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, List, Input, Select, Button } from '../';
import useForm from '../../hooks/useForm';
import { ajaxCreateTransaction, ajaxGetTransactions, ajaxGetTypes } from '../../services/ajax';

const Home = () => {
  
  const navigate = useNavigate();

  const [transactions, setTransaction] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);
  const [types, setTypes] = useState([]);
  const [form, handleChange, reset] = useForm({
    concept: '',
    amount: '',
    date: '',
    id_type_transaction: ''
  });


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

  useEffect(() => {
    const loggedUser = window.sessionStorage.getItem('loggedUser');

    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      setUser(user);
      console.log(user);
    }

  }, []);

  return (
    <>
      {user ? <h1>Hola {user.firstname}</h1> : navigate('/login') }
      <Card>
        <List transactions={transactions} />
      </Card>
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
    </>
  );
};

export default Home;