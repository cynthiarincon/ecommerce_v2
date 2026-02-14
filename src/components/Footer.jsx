function Footer() {
  return (
    <footer>
      <div className="socials">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/images/facebook.png" alt="facebook logo" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/images/instagram.png" alt="instagram logo" />
        </a>
        <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/images/x.png" alt="x logo" />
        </a>
        <a href="https://www.youtube.com/results?search_query=skincare" target="_blank" rel="noopener noreferrer">
          <img src="/assets/images/youtube.png" alt="youtube logo" />
        </a>
      </div>
      <p>
        &copy; 2025 Skinthia. All rights reserved.
        <br />
        This application was developed as part of a learning project. 
        It is intended solely for educational use and portfolio demonstration.
      </p>
    </footer>
  );
}

export default Footer;