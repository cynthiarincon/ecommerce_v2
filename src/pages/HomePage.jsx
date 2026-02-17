import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Newsletter from '../components/Newsletter';

function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      
      <img 
        className="ladies-img" 
        src="/assets/images/ladies.png" 
        alt="product line and ladies in the background" 
      />
      
      <p className="contact-me">
        <a href="/contact">CONTACT ME</a>
      </p>
      
      <Newsletter />
    </main>
  );
}

export default HomePage;