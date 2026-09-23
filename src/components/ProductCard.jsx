function ProductCard({id, image, title, category, rating, price,onAddToCart}) {
    return (
        <div className = "product-card" key={id}>
                    <img src={image} alt={title} />
                    <p className="product-category">{category}</p>
                    <h3>{title}</h3>
                    <p className="product-rating">⭐⭐⭐⭐☆ ({rating})</p>
                    <p className="product-price">R$ {price}</p>
                    <button className="btn-secondary" onClick={onAddToCart}>Adicionar ao carrinho</button>
        </div >
    )
}

export default ProductCard 