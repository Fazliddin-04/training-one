import PropTypes from 'prop-types'
import { useCounterContext } from '../useCounterContext'
import styles from '../style.module.scss'

Count.propTypes = {
  max: PropTypes.number,
}

function Count({ max }) {
  const { count } = useCounterContext()

  const hasError = max ? count >= max : false

  return (
    <div className={`${styles.count} ${hasError ? styles.error : ''}`}>
      {count}
    </div>
  )
}

export default Count
