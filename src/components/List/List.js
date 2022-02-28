import React from 'react';
import { Card } from '../';
import './List.css';

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
      <div className='balance'>
        <h2>Balance</h2>
        <h3>{balance()}</h3>
      </div>
      <div className='list-container'>
        <Card>
          <div className='incomes'>
            <h2>Ingresos</h2>
            <ul>
              {income.map(x => 
                <li key={x.id}>{x.concept} {x.amount} {x.date} {x.user_id}</li>
              )}
            </ul>
          </div>
        </Card>
        <Card>
          <div className='expenses'> 
            <h2>Egresos</h2>
            <ul>
              {expenses.map(x => 
                <li key={x.id}>{x.concept} {x.amount} {x.date} {x.user_id}</li>
              )}
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default List;