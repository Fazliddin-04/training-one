import styles from './style.module.scss'
import Button from './components/Button'
import Count from './components/Count'
import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { CounterProvider } from './CounterContext'

Counter.propTypes = {
  initialValue: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  children: PropTypes.node,
}

function Counter({ initialValue = 0, onChange, children }) {
  const [count, setCount] = useState(initialValue)

  const firstMounded = useRef(true)
  useEffect(() => {
    if (!firstMounded.current) {
      onChange && onChange(count)
    }
    firstMounded.current = false
  }, [count, onChange])

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(Math.max(0, count - 1))
  }

  return (
    <CounterProvider value={{ count, handleIncrement, handleDecrement }}>
      <div className={styles.counter}>{children}</div>
    </CounterProvider>
  )
}

Counter.Button = Button
Counter.Count = Count

export { Counter }
