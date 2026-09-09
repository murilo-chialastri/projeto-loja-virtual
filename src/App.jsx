import { useState } from 'react'
import './App.css'
import hero from './assets/hero.png'
import Benefits from './components/Benefits'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'

const App = () => {

  const [cart, setCart] = useState(0)


  return (
    <div className="app">

      <Header adicionarCarrinho={cart} />
      <Hero 
        imagem = {hero}
        titulo= "Ofertas imperdíveis para você"
        subtitulo="Até 30% de desconto em produtos selecionados. Aproveite!"
        textoBotao= "Ver ofertas" 
      />
      <Categories/>
      <Products setCart={setCart} />
      <Benefits/>
      <Footer />

    </div>
  )
}

export default App
