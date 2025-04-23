import React, { createContext, useContext, useState, ReactNode } from 'react'

type ToastType = 'info' | 'success' | 'error' | 'warning'

type Toast = {
  id: string
  message: string
  type: ToastType
}

type ToastContextType = {
  showToast: (message: string, type?: ToastType) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

let toastId = 0

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showToast = (message: string, type: ToastType = 'info') => {
    const id = `toast-${++toastId}`
    setToasts((prev) => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000)
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          zIndex: 9999,
        }}
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            style={{
              padding: '10px 16px',
              borderRadius: '6px',
              color: '#fff',
              backgroundColor:
                toast.type === 'success'
                  ? '#4caf50'
                  : toast.type === 'error'
                  ? '#f44336'
                  : toast.type === 'warning'
                  ? '#ff9800'
                  : '#2196f3',
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
              minWidth: '200px',
            }}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
