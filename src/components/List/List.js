import React from 'react';

const List = ({ transactions }) => {

  return (
    <ul>
      {transactions.map(x => 
        <li key={x.id}>{`${x.concept} ${x.amount} ${x.date} ${x.user_id} ${x.id_type_transaction} ${x.is_deleted}`}</li>)}
    </ul>
  );
};

export default List;