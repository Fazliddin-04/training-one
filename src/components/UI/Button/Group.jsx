import PropTypes from 'prop-types'
import styles from './style.module.scss'

function GroupButton({ style, active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${active ? styles.active : ''} ${
        styles.sm
      } ${styles.secondary}`}
      style={{ ...style }}
    >
      {children}
    </button>
  )
}

GroupButton.propTypes = {
  active: PropTypes.bool,
  size: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  children: PropTypes.node,
}

export default GroupButton
