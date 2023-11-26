import PropTypes from 'prop-types'

import styles from '../style.module.scss'
import { useCounterContext } from '../useCounterContext'
import { Icon } from '@iconify/react'

Button.propTypes = {
  icon: PropTypes.string,
}

function Button({ icon = 'plus', ...props }) {
  const { handleDecrement, handleIncrement } = useCounterContext()
  return (
    <div
      className={styles.button}
      onClick={() => (icon === 'plus' ? handleIncrement() : handleDecrement())}
      {...props}
    >
      <Icon icon={`mdi:${icon}`} />
    </div>
  )
}

export default Button
