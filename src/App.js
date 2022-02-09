import React, { useState } from 'react'
import { Button, Card, Container, Input, List } from './components'
import useForm from './hooks/useForm'


function App() {

  const [transactions, setTransaction] = useState([])
  const [form, handleChange, reset] = useForm({
    concept: '',
    amount: '',
    date: '',
    type: '',
  })

  const  submit = async (e) => {
    e.preventDefault()
    setTransaction([
      ...transactions,
      form,
    ])

    const response = await fetch('http://localhost:5005/transaction/add', form)

    const data = await response.json()
    console.log(data)

    reset()
  }


  return (
    <div style={{ marginTop: '5%' }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <form onSubmit={submit}>
              <Input label='Concepto' name='concept' value={form.concept} onChange={handleChange} />
              <Input label='Monto' name='amount' value={form.amount} onChange={handleChange} />
              <Input label='Fecha' name='date' value={form.date} onChange={handleChange} />
              <Input label='Tipo' name='type' value={form.type} onChange={handleChange} />
        
              <Button>Enviar</Button>
            </form>
          </div>
        </Card>
        <Card>
          <List transactions={transactions}/>
        </Card>
      </Container>
    </div>
  )
}

export default App
