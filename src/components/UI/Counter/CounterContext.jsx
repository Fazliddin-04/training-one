import PropTypes from 'prop-types'
import { createContext } from 'react'

export const CounterContext = createContext(undefined)

CounterProvider.propTypes = {
  children: PropTypes.node,
  value: PropTypes.object,
}

function CounterProvider({ children, value }) {
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  )
}

export { CounterProvider }
