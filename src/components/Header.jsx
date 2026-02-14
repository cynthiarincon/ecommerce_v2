function Header() {
  return (
    <header>    
      <img 
        className="skinthia-logo" 
        src="/assets/images/skinthia-logo.png" 
        alt="skinthia logo"
      />

      <nav>
        <ul>
          <li className="home">
            <a href="/">HOME</a>
          </li>
          <li className="prod">
            <a href="/products">PRODUCTS</a>
          </li>
          <li className="about">
            <a href="/contact">CONTACT</a>
          </li>
          <li className="login">
            <a href="/placeholder">
              <img src="/assets/images/login.png" alt="login icon" />
            </a>
          </li>
          <li className="cart">
            <a href="/placeholder">
              <img src="/assets/images/cart.png" alt="cart icon" />
              <span className="cart-count"></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;