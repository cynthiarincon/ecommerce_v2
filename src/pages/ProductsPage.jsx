import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const filteredProducts = products.filter(product => {
    if (filter === 'all') return true;
    if (filter === 'under10') return product.price < 10;
    if (filter === 'under15') return product.price < 15;
    if(filter === 'skincare') return !product.name.includes('Merch');
    if (filter === 'merch') return product.name.includes('Merch');
    return true;
  });

  return (
    <main>
      <section className="core-hero">
        <h1 className="core-title">Introducing the Skínthia CORE System</h1>
        <img 
          className="dark-prod-img" 
          src="/assets/images/dark-products.jpg" 
          alt="dark product line" 
        />
      </section>

      <div className="filter-bar">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('under10')}>Under $10</button>
        <button onClick={() => setFilter('under15')}>Under $15</button>
        <button onClick={()=> setFilter('skincare')}>Skincare</button>
        <button onClick={() => setFilter('merch')}>Merch</button>
      </div>

      <p className="product-count">Showing {filteredProducts.length} products</p>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default ProductsPage;