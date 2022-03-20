import React from 'react';
import { TableContainer, StyledTable, TableBody, TableHead, TR, TH, TD } from './styles.js';


const Table = () => {
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
          <TR>
            <TD>Comida</TD>
            <TD>5000</TD>
            <TD>Ayer</TD>
            <TD>comida</TD>
          </TR>
        </TableBody>

      </StyledTable>
    </TableContainer>
  );
};

export default Table;
