import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, useToast } from '../components/ToastContext/ToastContext'; 

const meta: Meta = {
  title: 'Components/Toast',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj;

// Helper component inside the story to trigger toasts
const ToastButtons = () => {
  const { showToast } = useToast();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <button onClick={() => showToast('Info message', 'info')}>Show Info</button>
      <button onClick={() => showToast('Success message', 'success')}>Show Success</button>
      <button onClick={() => showToast('Error message', 'error')}>Show Error</button>
      <button onClick={() => showToast('Warning message', 'warning')}>Show Warning</button>
    </div>
  );
};

export const ToastDemo: Story = {
  render: () => (
    <ToastProvider>
      <ToastButtons />
    </ToastProvider>
  ),
};
