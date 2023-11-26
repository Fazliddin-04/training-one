import PropTypes from 'prop-types'
import styles from './style.module.scss'
import classNames from 'classnames'

function PrimaryButton({ type, size, color, onClick, style, children }) {
  if (type === 'submit') {
    return (
      <button
        onClick={onClick}
        className={classNames(styles.button, {
          [styles.secondary]: color === 'secondary',
          [styles.disabled]: color === 'disabled',
          [styles.grayscale]: color === 'grayscale',
          [styles.sm]: size === 'sm',
        })}
        style={{ width: '100%', ...style }}
      >
        {children}
      </button>
    )
  }
  return (
    <div
      onClick={onClick}
      className={classNames(styles.button, {
        [styles.secondary]: color === 'secondary',
        [styles.disabled]: color === 'disabled',
        [styles.sm]: size === 'sm',
      })}
      style={{ ...style }}
    >
      {children}
    </div>
  )
}

PrimaryButton.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  children: PropTypes.node,
}

export default PrimaryButton
