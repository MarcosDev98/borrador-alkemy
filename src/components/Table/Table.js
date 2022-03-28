import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { ReadOnlyRow, EditableRow } from '../';
// eslint-disable-next-line no-unused-vars
import { ConceptTH, TableContainer, StyledTable, TableBody, TableHead, TR, TH, TD } from './styles.js';

import { ajaxUpdateTransaction, ajaxDeleteTransaction, ajaxGetTransactions } from '../../services/ajax';
// import useForm from '../../hooks/useForm';

// eslint-disable-next-line no-unused-vars
const Table = () => {

  // LAS TRANSACCIONES LAS DEBERIA TRAER ACA!!
  // ES DONDE REALMENTE SE VAN A UTILIZAR.

  const [transactions, setTransactions] = useState([]);
  const [user, setUser] = useState(null);
  const [editRow, setEditRow] = useState(null);
  const [editFormData, setEditFormData] = useState({
    id: '',
    concept: '',
    amount: '',
    date: '',
    category_id: ''
  });
  

  useEffect(() => {

    getTransactions();

  }, [user]);


  useEffect(() => {

    const loggedUser = JSON.parse(window.sessionStorage.getItem('loggedUser'));
    if (loggedUser !== null) {
      const user = JSON.parse(loggedUser);
      setUser(user);
      console.log('?', user);
    }


    
  },[]);

  const getTransactions = () => {
    ajaxGetTransactions(user.token)
      .then((data) => {
        setTransactions(data);
      })
      .catch((error) => {
        console.error('get_transactions_error', error);
      });
  };

  const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };

    newFormData[fieldName] = fieldValue;
    
    setEditFormData(newFormData);

  };

  
  const handleEditFormSubmit = async (e) => {
    e.preventDefault();

    const editedTransaction = {
      id: editFormData.id,
      concept: editFormData.concept,
      amount: editFormData.amount,
      date: editFormData.date,
      category_id: editFormData.category_id,
    };

    console.log('token?', user.token);
    console.log('editedTransaction?', editedTransaction);


    ajaxUpdateTransaction(editedTransaction, user.token)
      .then(() => {
        console.log('transaction_updated');
        setEditRow(null);
        
        getTransactions();

      })
      .catch((error) => console.error('update_transaction_error', error));


  };


  const handleDelete = async (event, transaction) => {
    event.preventDefault();

    const message = '¿Desea eliminar el registro ' + ' ' + transaction.concept + ' ' + transaction.amount + ' ' + transaction.date + '?';

    if (!confirm(message)){
      return;
    }

    try {
      ajaxDeleteTransaction(transaction.id, user.token)
        .then(() => {
          console.log('transaction_deleted');
          getTransactions();
        })
        .catch((error) => console.error('delete_transaction_error', error));
    } catch (error) {
      console.error(error);
    }
    
  };

  const handleCancelClick = () => {
    setEditRow(null);
  };

  const handleEdit = (e, transaction) => {
    e.preventDefault();
    setEditRow(transaction.id);

    const formValues = {
      id: transaction.id,
      concept: transaction.concept,
      amount: transaction.amount,
      date: transaction.date,
      category_id: transaction.category_id,
    };

    setEditFormData(formValues);

  };

  return(
    <TableContainer>
      <form onSubmit={handleEditFormSubmit}>
        <StyledTable>

          <TableHead>
            <TR>
              <ConceptTH>Concepto</ConceptTH>
              <TH>Monto</TH>
              <TH>Fecha</TH>
              <TH>Categoria</TH>
              <TH>Acciones</TH>
            </TR>
          </TableHead>



          <TableBody>
            {transactions.map((x) => 
              <>
                {editRow === x.id ? (
                  <EditableRow
                    key={x.id}
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    transaction={x}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow 
                    key={x.id} 
                    transaction={x} 
                    handleEdit={handleEdit} 
                    handleDelete={handleDelete}
                  />
                )}
                
              </>
            )}
          </TableBody>

        </StyledTable>
      </form>
    </TableContainer>
  );
};

export default Table;



