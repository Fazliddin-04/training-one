import { useEffect, useState, useRef } from 'react'

import styles from './style.module.scss'
import Carousel from '../UI/Carousel'
import GroupButton from '../UI/Button/Group'
import Card from '../UI/Card'
import Navbar from '../UI/Navbar'

import bannerImg from '../../assets/banner.png'
import lavash from '../../assets/lavash.png'

const banners = [
    { image: bannerImg, title: 'banner' },
    { image: bannerImg, title: 'banne' },
  ],
  categories = [
    {
      title: 'Лаваш',
      id: 'category_1',
      products: [
        {
          id: 'product_1',
          title: 'Комбо 1',
          active_in_menu: true,
          image: lavash,
          description: 'Мясной лаваш, фри, кола разлив и кетчуп',
          price: 39000,
        },
        {
          id: 'product_2',
          title: 'Комбо 1',
          active_in_menu: true,
          image: lavash,
          description: 'Мясной лаваш, фри, кола разлив и кетчуп',
          price: 39000,
        },
        {
          id: 'product_3',
          title: 'Комбо 1',
          active_in_menu: false,
          image: lavash,
          description: 'Мясной лаваш, фри, кола разлив и кетчуп',
          price: 39000,
        },
        {
          id: 'product_4',
          title: 'Комбо 1',
          active_in_menu: true,
          image: lavash,
          description: 'Мясной лаваш, фри, кола разлив и кетчуп',
          price: 39000,
        },
      ],
    },
    {
      title: 'Бургеры',
      id: 'burger_1',
      products: [
        {
          id: 'burger_pro_1',
          title: 'Комбо 1',
          active_in_menu: true,
          image: lavash,
          description: 'Мясной лаваш, фри, кола разлив и кетчуп',
          price: 39000,
        },
        {
          id: 'burger_pro_2',
          title: 'Комбо 1',
          active_in_menu: false,
          image: lavash,
          description: 'Мясной лаваш, фри, кола разлив и кетчуп',
          price: 39000,
        },
        {
          id: 'burger_pro_3',
          title: 'Комбо 1',
          active_in_menu: true,
          image: lavash,
          description: 'Мясной лаваш, фри, кола разлив и кетчуп',
          price: 39000,
        },
        {
          id: 'burger_pro_4',
          title: 'Комбо 1',
          active_in_menu: true,
          image: lavash,
          description: 'Мясной лаваш, фри, кола разлив и кетчуп',
          price: 39000,
        },
      ],
    },
  ]

function Main() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isFixedCatalog, setIsFixedCatalog] = useState(false)
  const [scrollDir, setScrollDir] = useState('scrolling down')

  const catalogRef = useRef(null)
  const catalogMenuRef = useRef(null)

  // Active category animation
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    if (scrollPosition > catalogRef.current.offsetTop - 10)
      setIsFixedCatalog(true)
    else {
      setIsFixedCatalog(false)
      catalogMenuRef.current.scrollLeft = 0
    }
    catalogRef.current.childNodes.forEach((child) => {
      scrollPosition > child.offsetTop - 60 &&
        scrollPosition < child.offsetTop + child.offsetHeight - 60 &&
        setActiveCategory(child.id)
    })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollPosition])

  // Detecting scroll direction
  useEffect(() => {
    const threshold = 0
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setScrollDir(scrollY > lastScrollY ? 'scrolling down' : 'scrolling up')
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollDir])

  // Change catalog menu scroll-x position
  useEffect(() => {
    catalogMenuRef.current.childNodes.length &&
      catalogMenuRef.current.childNodes?.forEach(
        (child) =>
          child.childNodes[0].attributes[0].value == '#' + activeCategory &&
          (scrollDir === 'scrolling down'
            ? (catalogMenuRef.current.scrollLeft =
                child.offsetLeft - catalogMenuRef.current.offsetLeft)
            : (catalogMenuRef.current.scrollLeft =
                child.offsetLeft - catalogMenuRef.current.offsetLeft))
      )
  }, [activeCategory, scrollDir])

  const handleScroll = () => {
    const position = window.scrollY
    setScrollPosition(position)
  }

  return (
    <main className={`${styles.main} container`}>
      <Carousel multiple={false} list={banners} />
      <div className={styles.catalog}>
        <div className={styles.wrapper}>
          {categories?.map((item) => (
            <div key={item?.id}>
              <a href={`#${item?.id}`}>
                <GroupButton
                  size="sm"
                  active={activeCategory?.includes(item?.id)}
                  onClick={() => setActiveCategory(item?.id)}
                >
                  {item?.title}
                </GroupButton>
              </a>
            </div>
          ))}
        </div>
        <div className={`${styles.top} ${isFixedCatalog ? styles.active : ''}`}>
          <Navbar type="catalog">
            <div className={styles.catalogNavbar}>
              <div className={styles.wrapper} ref={catalogMenuRef}>
                {categories?.map((category) => (
                  <div key={category.id}>
                    <a href={`#${category.id}`}>
                      <GroupButton
                        size="sm"
                        active={activeCategory?.includes(category.id)}
                      >
                        {category.title}
                      </GroupButton>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Navbar>
        </div>
      </div>
      <section ref={catalogRef}>
        {categories?.map((category) => (
          <div key={category.id} id={category.id} className={styles.section}>
            <h2>{category.title}</h2>
            <div
              className={styles.grid}
              //   columns={{ xs: 2, sm: 3, md: 4, lg: 4 }}
            >
              {category?.products?.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Main
