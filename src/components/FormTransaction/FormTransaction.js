import React, { useState, useEffect } from 'react';
import { Card, Input, Select, Button, Notification } from '../'; 
import { ajaxCreateTransaction, ajaxGetTypes } from '../../services/ajax';

import useForm from '../../hooks/useForm';


const FormTransaction = ({ getTransactions }) => {

  // const [transactions, setTransaction] = useState([]);
  const [user, setUser] = useState(null);
  const [types, setTypes] = useState([]);
  const [notification, setNotification] = useState(false);
  const [form, handleChange, reset] = useForm({
    concept: '',
    amount: '',
    date: '',
    id_type_transaction: ''
  });



  const handleSubmit = async (e) => {
    e.preventDefault();

    ajaxCreateTransaction(form, user.token)
      .then(() => {
        getTransactions();
      })
      .catch((error) => {
        const newError = {
          mode: 'error',
          title: 'Ups',
          message: 'Se produjo un error al guardar el registro.',
        };
        setNotification(newError);
        console.error('create_transaction_error', error);
      }
      );


    reset();
  };


  const getTypes = () => {
    ajaxGetTypes()
      .then((data) => {
        setTypes(data);
      })
      .catch((error) => {
        
        const newError = {
          mode: 'error',
          title: 'Lo siento',
          message: 'Hubo problemas durante la conexion con la BD.',
        };
        setNotification(newError);
        console.error('get_types_error', error);
      });
    
  };

  useEffect(() => {
    getTypes();
    const loggedUser = JSON.parse(window.sessionStorage.getItem('loggedUser'));
    if (loggedUser !== null) {
      setUser(loggedUser);
    }
  }, []);


  return (
    <Card>
      {notification ? <Notification mode={notification.mode} title={notification.title} message={notification.message} /> : null}
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