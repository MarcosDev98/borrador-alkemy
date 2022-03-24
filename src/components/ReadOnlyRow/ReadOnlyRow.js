import React from 'react';

// eslint-disable-next-line no-unused-vars
import { TR, TD } from '../Table/styles';

import { EditIcon, DeleteIcon, IconsTD, CategoryTD, ConceptTD, AmountTD, DateTD } from './styles';




const handleDelete = (e) => {
  e.preventDefault();

  console.log('click on delete icon');
};


const ReadOnlyRow = ({ transaction, handleEdit }) => {
  return (
    <TR 
      key={transaction.id} 
      bg={transaction.id_type_transaction === 1 ? 'green' : 'red' }
    >
      <ConceptTD>{transaction.concept}</ConceptTD>
      <AmountTD>{transaction.amount}</AmountTD>
      <DateTD>{transaction.date}</DateTD>
      <CategoryTD>{transaction.category_id}</CategoryTD>
      <IconsTD>
        <EditIcon 
          className="uil uil-edit" 
          onClick={(event) => handleEdit(event, transaction)} 
        />
        <DeleteIcon className="uil uil-trash-alt" onClick={handleDelete} />
      </IconsTD>
    </TR>
  );
};

export default ReadOnlyRow;