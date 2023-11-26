import { useState } from 'react'
import PropTypes from 'prop-types'
// Utils
import numToPrice from '../../../utils/numToPrice'

// Components
import Button from '../Button/Primary'
import { Counter } from '../Counter'
// Style
import styles from './style.module.scss'

function Card({ product }) {
  const [isOrdered, setOrdered] = useState(false)

  const addToCartHandler = () => {
    setOrdered(true)
  }

  const onCountChange = (val) => {
    if (!val) {
      setOrdered(false)
    }
  }

  return (
    <div
      className={`${styles.card} ${
        !product.active_in_menu ? styles.unavailable : ''
      }`}
    >
      <div className={styles.card_img}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.card_content}>
        <div>
          <h4 className={styles.title}>{product.title}</h4>
          <p className={styles.description}>{product.description}</p>
        </div>
        <div className={styles.card_actions}>
          <div className={styles.price}>
            {numToPrice(product.price, '')}
            <span>сум</span>
          </div>
          {isOrdered ? (
            <Counter
              className={styles.counter}
              initialValue={1}
              onChange={onCountChange}
            >
              <Counter.Button icon="minus" />
              <Counter.Count />
              <Counter.Button />
            </Counter>
          ) : (
            <Button
              color={!product.active_in_menu && 'disabled'}
              onClick={addToCartHandler}
            >
              {!product.active_in_menu ? 'Недоступно' : 'Добавить'}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  product: PropTypes.object,
}

export default Card
