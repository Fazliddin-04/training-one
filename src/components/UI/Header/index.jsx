import { Icon } from '@iconify/react'
import Navbar from '../Navbar'
// Style
import styles from './style.module.scss'

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <Navbar>
          <div className={styles.flexbox_center_between}>
            <div className={styles.wrapper}>
              <a href="#" className={styles.logo}>
                LOGO
              </a>
              <div className={styles.links}>
                {['Меню', 'Филиалы', 'О нас', 'Контакты'].map((link) => (
                  <a href={`/#${link}`} key={link + '_header'}>
                    <div
                      className={`${styles.link} ${
                        'router.pathname' === `/${link}` ? styles.active : ''
                      }`}
                    >
                      {link}
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.addressButton}>
                <div className={styles.icon}>
                  <Icon icon="mdi:map-marker" />
                </div>
                <div>
                  <p>Доставка или заказ с собой</p>
                  <p className={styles.address}>Выберите способ получения</p>
                </div>
              </div>
            </div>
          </div>
        </Navbar>
      </header>
    </>
  )
}
