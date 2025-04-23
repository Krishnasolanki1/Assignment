import React from 'react'

export type Option = {
  label: string
  value: string
}

export type SelectProps = {
  label?: string
  options: Option[]
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  placeholder?: string
  name?: string
  required?: boolean
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  name,
  required = false,
}) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {label && <label>{label}</label>}
      <select
        value={value}
        onChange={onChange}
        name={name}
        required={required}
        style={{
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          width: '100%',
        }}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
