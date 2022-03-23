import React from 'react';

import { TR, TD } from '../Table/styles';

const EditableRow = ({ transaction }) => {
  return (
    <TR 
      key={transaction.id} 
      bg={transaction.id_type_transaction === 1 ? 'green' : 'red' }
    >
      <TD>
        <input 
          type='text' 
          required 
          placeholder='Ingrese el concepto...' 
          name='concept' 
        >{transaction.concept}
        </input>
      </TD>
      <TD>
        <input 
          type='text' 
          required 
          placeholder='Ingrese el Monto...' 
          name='amount' 
        >{transaction.amount}
        </input>
      </TD>
      <TD>
        <input 
          type='text' 
          required 
          placeholder='Ingrese la fecha...' 
          name='date' 
        >{transaction.date}
        </input>
      </TD>
      <TD>
        <input 
          type='text' 
          required 
          placeholder='Ingrese la categoria...' 
          name='category_id' 
        >{transaction.category_id}
        </input>
      </TD>
      <i className="uil uil-edit"></i>
      <i className="uil uil-trash-alt"></i>
    </TR>
  );
};

export default EditableRow;