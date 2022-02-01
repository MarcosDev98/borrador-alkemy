import React from 'react'
import { Container, Form } from './components'
import useForm from './hooks/useForm'

function App() {

  // eslint-disable-next-line
  const [form, handleChange] = useForm({ concept: '', amount: '', date: '', type: '' })

  return (
    <div>
      <Container>
        <Form />
      </Container>
    </div>
  )
}

export default App
