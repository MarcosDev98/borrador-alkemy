import styled from 'styled-components';
import { COLORS } from '../../utils/cssVariables';

const { list_incomes, list_expenses } = COLORS;


export const TableContainer = styled.div``;



export const StyledTable = styled.table`

`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TR = styled.tr``;

export const TH = styled.th``;

export const TD = styled.td.attrs()`
  width: 100%;
  background-color: ${props => props.bg === 'green' ? list_incomes : list_expenses }

`;

