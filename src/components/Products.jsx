import ProductCard from "./ProductCard"

const Products = ({ setCart }) => {

    const addToCart = () => {
        setCart((prev) => prev + 1)
    }


    return (

        
        <section id="produtos" className="products">
            <h2>Produtos em destaque</h2>
        
        
            <div className="product-list">

                <ProductCard
                    id="1"
                    image="https://placehold.co/240x240/aa3bff/ffffff?text=Tenis"
                    title="Tênis esportivo"
                    category="Calçados"
                    rating="4.5"
                    price="299,90"
                    onAddToCart={addToCart}
                />
                <ProductCard
                    id="2"
                    image="https://placehold.co/240x240/3b82f6/ffffff?text=Fone"
                    title="Fone de Ouvido Bluetooth"
                    category="Eletrônicos"
                    rating="4.8"
                    price="299,90"
                    onAddToCart={addToCart}
                />
                <ProductCard
                    id="3"
                    image="https://placehold.co/240x240/22c55e/ffffff?text=Mochila"
                    title="Mochila para Notebook"
                    category="Acessórios"
                    rating="4.2"
                    price="R$ 189,90"
                    onAddToCart={addToCart}
                />
                <ProductCard
                    id="4"
                    image="https://placehold.co/240x240/f97316/ffffff?text=Relogio"
                    title="Relógio Smartwatch"
                    category="Eletrônicos"
                    rating="4.7"
                    price="R$ 349,90"
                    onAddToCart={addToCart}
                />

            </div>
        </section>
    )
}
export default Products