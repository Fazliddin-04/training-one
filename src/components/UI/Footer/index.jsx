import { Icon } from '@iconify/react'
import styles from './style.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer_content}>
          <a href="#" className={styles.logo}>
            LOGO
          </a>
          <ul className={styles.list}>
            {['Филиалы', 'О нас', 'Контакты'].map((link) => (
              <li key={link + '_footer'}>
                <a
                  href={`/#${link}`}
                  className={`${styles.link} ${
                    'router.pathname' === `/${link}` ? styles.active : ''
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footer_bottom}>
          <p>
            &copy; Udevs 2020 - {new Date().getFullYear()} All rights reserved
          </p>
          <div className={styles.social}>
            <a
              href="https://www.instagram.com/maxwayuz/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="mdi:instagram" />
            </a>
            <a
              href="https://www.facebook.com/maxway.uzb/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="mdi:facebook" />
            </a>
            <a
              href="https://www.youtube.com/@maxway2010"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="mdi:youtube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
