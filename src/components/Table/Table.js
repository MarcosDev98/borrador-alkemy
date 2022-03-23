import React from 'react';
import { TableContainer, StyledTable, TableBody, TableHead, TR, TH, TD } from './styles.js';


// eslint-disable-next-line no-unused-vars
const Table = ({ transactions }) => {


  // const income = transactions.filter(x => x.id_type_transaction === 1);
  // const expenses = transactions.filter(x => x.id_type_transaction === 2);

  return(
    <TableContainer>
      <StyledTable>

        <TableHead>
          <TR>
            <TH>Concepto</TH>
            <TH>Monto</TH>
            <TH>Fecha</TH>
            <TH>Categoria</TH>
          </TR>
        </TableHead>



        <TableBody>
          {transactions.map((x, i) => 
            <TR key={i} bg={x.id_type_transaction === 1 ? 'green' : 'red' }>
              <TD>{x.concept}</TD>
              <TD>{x.amount}</TD>
              <TD>{x.date}</TD>
              <TD>{x.category_id}</TD>
            </TR>)}
        </TableBody>

      </StyledTable>
    </TableContainer>
  );
};

export default Table;



