import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { ReadOnlyRow, EditableRow } from '../';
// eslint-disable-next-line no-unused-vars
import { ConceptTH, TableContainer, StyledTable, TableBody, TableHead, TR, TH, TD } from './styles.js';

import { ajaxUpdateTransaction } from '../../services/ajax';
// import useForm from '../../hooks/useForm';

// eslint-disable-next-line no-unused-vars
const Table = ({ transactions }) => {

  const loggedUser = JSON.parse(window.sessionStorage.getItem('loggedUser'));
  const [editRow, setEditRow] = useState(null);
  const [editFormData, setEditFormData] = useState({
    id: '',
    concept: '',
    amount: '',
    date: '',
    category_id: ''
  });

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

    console.log('token?', loggedUser.token);

    ajaxUpdateTransaction(editedTransaction, loggedUser.token)
      .then(() => {
        console.log('transaction_updated');

      })
      .catch((error) => console.error('update_transaction_error', error));


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
                  <ReadOnlyRow key={x.id} transaction={x} handleEdit={handleEdit} />
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



