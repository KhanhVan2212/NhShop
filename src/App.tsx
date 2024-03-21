import {  Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home'
import ShopPage from './pages/shop'
import NotFound from './pages/notFound'
import About from './pages/about'
import Contact from './pages/contact'
import LayoutWebsite from './compoments/LayoutWebsite'
import DetailProduct from './pages/detail-product'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LayoutWebsite />}>
      <Route index element={<HomePage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/product/:id' element={<DetailProduct />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
      </Route>

     
    </Routes>

    </>
  )
}

export default App
