import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Input from '../components/Input/input'; 
import { InputProps } from '../components/Input/input'; // Make sure to export InputProps from Input.tsx

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
};

export default meta;

type Story = StoryObj<InputProps>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    type: 'text',
    required: false,
  },
};

export const Password: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
  },
};
