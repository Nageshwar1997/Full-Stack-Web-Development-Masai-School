import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ProductSection from './Components/ProductSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ProductSection />
      <Footer />
    </>
  )
}

export default App
