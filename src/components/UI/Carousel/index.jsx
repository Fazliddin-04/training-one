import { useState } from 'react'
// Slick js
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// Style
import styles from './style.module.scss'
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'

function Carousel({ list }) {
  const [activeSlick, setActiveSlick] = useState(0)

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    className: `slider ${styles.slider}`,
    dotsClass: `slick-dots ${styles.slickDots}`,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current) => setActiveSlick(current),
    customPaging: (i) => (
      <div
        className={`${styles.dot} ${activeSlick === i ? styles.active : ''}`}
      />
    ),
  }

  return (
    <Slider {...settings}>
      {list?.map((item) => (
        <div className={styles.slide} key={item.title}>
          <img src={item.image} alt={item.title} />
        </div>
      ))}
    </Slider>
  )
}

Carousel.propTypes = {
  list: PropTypes.array,
}

export default Carousel

function SampleNextArrow(props) {
  return (
    <div className={styles.slideNextBtn} {...props}>
      <Icon icon="mdi:chevron-right" />
    </div>
  )
}

function SamplePrevArrow(props) {
  return (
    <div className={styles.slidePrevBtn} {...props}>
      <Icon icon="mdi:chevron-left" />
    </div>
  )
}
