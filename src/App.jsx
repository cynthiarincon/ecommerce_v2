import './styles/index.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CouponBanner from './components/CouponBanner'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ContactPage from './pages/ContactPage'
import PlaceholderPage from './pages/PlaceholderPage'

function App() {
  return (
    <BrowserRouter>
      <CouponBanner />
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/placeholder" element={<PlaceholderPage />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;