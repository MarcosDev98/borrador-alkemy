import React from 'react';
import { Balance, CardList, Expenses, Incomes, ListContainer } from './styles';


const List = ({ transactions }) => {

  // 1 y 2 esta hardcodeado.
  // TODO: hacer metodo para buscar en la BD que id_type_transaction corresponde con INGRESO y cual con EGRESO.
  const income = transactions.filter(x => x.id_type_transaction === 1);
  const expenses = transactions.filter(x => x.id_type_transaction === 2);

  const balance = () => {

    let resultado = 0;
    

    income.map((x) => resultado += x.amount);

    expenses.map((x) => resultado -= x.amount);


    return resultado;
    
  };

  return (
    <div>
      <Balance>
        <h2>Balance</h2>
        <h3>{balance()}</h3>
      </Balance>
      <ListContainer>
        <CardList>
          <Incomes>
            <h2>Ingresos</h2>
            <ul>
              {income.map(x => 
                <li key={x.id}>{x.concept} {x.amount} {x.date} {x.user_id}</li>
              )}
            </ul>
          </Incomes>
        </CardList>
        <CardList>
          <Expenses>
            <h2>Egresos</h2>
            <ul>
              {expenses.map(x => 
                <li key={x.id}>{x.concept} {x.amount} {x.date} {x.user_id}</li>
              )}
            </ul>
          </Expenses>
        </CardList>
      </ListContainer>
    </div>
  );
};

export default List;