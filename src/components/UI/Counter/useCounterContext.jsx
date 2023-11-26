import React from 'react'
import { CounterContext } from './CounterContext'

function useCounterContext() {
  const context = React.useContext(CounterContext)
  if (context === undefined) {
    throw new Error('useCounterContext must be used within a CounterProvider')
  }
  return context
}

export { useCounterContext }
