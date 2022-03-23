import React from 'react';

import { TR, TD } from '../Table/styles';

const ReadOnlyRow = ({ transaction }) => {
  return (
    <TR 
      key={transaction.id} 
      bg={transaction.id_type_transaction === 1 ? 'green' : 'red' }
    >
      <TD>{transaction.concept}</TD>
      <TD>{transaction.amount}</TD>
      <TD>{transaction.date}</TD>
      <TD>{transaction.category_id}</TD>
      <i className="uil uil-edit"></i>
      <i className="uil uil-trash-alt"></i>
    </TR>
  );
};

export default ReadOnlyRow;