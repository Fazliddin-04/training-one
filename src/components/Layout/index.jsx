import { Footer } from '../UI/Footer'
import { Header } from '../UI/Header'

export default function Layout({ children }) {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
