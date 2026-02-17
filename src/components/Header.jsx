import { Link } from 'react-router-dom'

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
                <Link to="/">HOME</Link>
            </li>
            <li className="prod">
                <Link to="/products">PRODUCTS</Link>
            </li>
            <li className="about">
                <Link to="/contact">CONTACT</Link>
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