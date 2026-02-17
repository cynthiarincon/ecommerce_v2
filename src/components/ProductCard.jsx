function ProductCard({ product }) {
  return (
    <div className="products">
      <h2 className="prod-title">{product.name}</h2>
      <img className="prod-img" src={product.photo} alt={product.name} />
      <p className="prod-desc">{product.description}</p>
      <p className="prod-price">${product.price}</p>
      <button className="prod-btn" type="button">Add to cart</button>
    </div>
  );
}

export default ProductCard;