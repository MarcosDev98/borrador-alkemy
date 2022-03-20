import styled from 'styled-components';
import { COLORS, FONTSIZES } from '../../utils/cssVariables';
import { MyCard } from '../Card/styles';

const { list_balance, list_expenses, list_incomes } = COLORS;
const { list_items } = FONTSIZES;

export const Balance = styled.div`
  background-color: ${list_balance};
  margin: 5% auto 0 auto;
  text-align: center;
`;

export const ListContainer = styled.div`
  display: flex;
  font-size: ${list_items};
  justify-content: space-around;
  margin-bottom: 5%;
`;

export const Incomes = styled.div`
  text-align: center;
  background-color: ${list_incomes};
`;

export const Item = styled.li`
  list-style: none;
`;


export const Expenses = styled.div`
  text-align: center;
  background-color: ${list_expenses};
`;

export const CardList = styled(MyCard)`
  width: 49%;
`;
