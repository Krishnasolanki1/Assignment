import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'

import Select, { SelectProps, Option } from '../components/Input/Select/Select'

const options: Option[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Orange', value: 'orange' },
  { label: 'Banana', value: 'banana' },
]

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
}

export default meta

type Story = StoryObj<SelectProps>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return <Select {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  },
  args: {
    label: 'Choose Fruit',
    options,
    placeholder: 'Select a fruit',
  },
}
