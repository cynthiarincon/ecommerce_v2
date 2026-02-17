import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default FeaturedProducts;