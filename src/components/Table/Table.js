import React from 'react';
import { ReadOnlyRow, EditableRow } from '../';
// eslint-disable-next-line no-unused-vars
import { TableContainer, StyledTable, TableBody, TableHead, TR, TH, TD } from './styles.js';


// eslint-disable-next-line no-unused-vars
const Table = ({ transactions }) => {


  // const income = transactions.filter(x => x.id_type_transaction === 1);
  // const expenses = transactions.filter(x => x.id_type_transaction === 2);

  return(
    <TableContainer>
      <form>
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
            {transactions.map((x) => 
              <>
                <ReadOnlyRow key={x.id} transaction={x} />
                <EditableRow key={x.id} transaction={x} />
              </>
            )}
          </TableBody>

        </StyledTable>
      </form>
    </TableContainer>
  );
};

export default Table;



