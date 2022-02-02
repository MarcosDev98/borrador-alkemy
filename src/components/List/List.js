import React from 'react'

const List = ({ transactions }) => {
  return (
    <ul>
      {transactions.map(x => 
        <li key={x.concept}>{`${x.concept} ${x.amount} ${x.date} ${x.type}`}</li>)}
    </ul>
  )
}

export default List