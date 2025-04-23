import React from 'react'

export type InputProps = {
  label?: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  name?: string
  required?: boolean
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  name,
  required = false,
}) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        required={required}
        style={{
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          width: '100%',
        }}
      />
    </div>
  )
}

export default Input
