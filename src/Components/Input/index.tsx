import React, { InputHTMLAttributes } from 'react'


import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
  name: string;
  observation?: string
}

const Input: React.FC<InputProps> = ({label, name, observation, ...rest}) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <span>{observation}</span>
      <input type="text" id={name} {...rest} />
    </div>
  )
}

export default Input