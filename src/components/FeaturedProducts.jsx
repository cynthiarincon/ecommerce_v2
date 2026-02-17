import { useState, useEffect } from 'react';

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from my old product.json temporarily
    // Later i'll change this to fetch from my MySQL API
    fetch('/product.json')
      .then(response => response.json())
      .then(data => {
        const featured = data.filter(product => product.featured);
        setProducts(featured);
      });
  }, []);

  return (
    <>
      <section className="feat-prod">
        <h1>FEATURED PRODUCTS</h1>
      </section>

      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="products">
            <h2 className="prod-title">{product.name}</h2>
            <img className="prod-img" src={product.photo} alt={product.name} />
            <p className="prod-desc">{product.description}</p>
            <p className="prod-price">${product.price}</p>
            <button className="prod-btn" type="button">Add to cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeaturedProducts;