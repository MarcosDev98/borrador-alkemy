import React from 'react'
import './Input.css'

const Input = ({ label, ...props }) => {
  return (
    <div className='field'>
      <label>{label}</label>  
      <input autoComplete='off' {...props} />
    </div>
  )
}

export default Input