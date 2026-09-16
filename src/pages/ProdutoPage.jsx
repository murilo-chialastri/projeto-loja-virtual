import { useEffect, useState } from "react"


const ProdutoPage = () => {
  const API_URL = import.meta.env.VITE_API_URL  
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    fetch(`${API_URL}products/category/electronics`)
      .then((results) => results.json())
      .then((dados) => setProducts(dados))
  }, [])

  return (
    <section>
      <h1>Página de Produto</h1>
      {products.map((produtoAtual) => (
          <div>
              <img src={produtoAtual.image} alt="" />
              <h2>{produtoAtual.title}</h2>
              <p>{produtoAtual.price}</p>
          </div>
      ))}
    </section>      

  )
}

export default ProdutoPage
