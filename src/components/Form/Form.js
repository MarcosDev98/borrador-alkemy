import React, { useState } from 'react'
import useForm from '../../hooks/useForm'

const Form = () => {

  

  return (
    <div>
      <form onSubmit={submit}>
        <label>Concepto</label>
        <input type='text' name='concept' />
        <label>Monto</label>
        <input type='number' name='amount' />
        <label>Fecha</label>
        <input type='datetime-local' name='date' />
        <label>Tipo</label>
        <input type='text' name='type' />
        <button>Registar</button>
      </form>
    </div>
  )
}

export default Form