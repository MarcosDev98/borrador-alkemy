import React from 'react'
import './Form.css'
import { Input } from '../../components'
import useForm from '../../hooks/useForm'

const Form = ({ submit }) => {

  const [form, handleChange, reset] = useForm({
    concept: '',
    amount: '',
    date: '',
    type: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault(submit)
    submit(form)
    reset
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input 
          label='Concepto'
          name='Concept'
          value={form.concept}
          onChange={handleChange}
        />

        <Input
          label='Monto'
          name='amount'
          value={form.amount}
          onChange={handleChange}
        />

        <Input
          label='Fecha'
          name='date'
          value={form.date}
          onChange={handleChange}
        />

        <Input
          label='Tipo'
          name='type'
          value={form.type}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

export default Form
