import { useState, useEffect } from 'react';

function Hero() {
  const [current, setCurrent] = useState(0);

  const slides = [
    { type: 'video', src: '/assets/videos/face-cleaning.mp4' },
    { type: 'image', src: '/assets/images/slider_img1.png' },
    { type: 'image', src: '/assets/images/slider_img2.png' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => setCurrent(prev => (prev + 1) % slides.length);
  const goPrev = () => setCurrent(prev => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="hero">
      <button className="slider-btn prev" onClick={goPrev}>&#8249;</button>

      <div className="slider-content">
        {slides[current].type === 'video' ? (
          <video className="hero-vid" autoPlay loop muted playsInline>
            <source src={slides[current].src} type="video/mp4" />
          </video>
        ) : (
          <img className="hero-img" src={slides[current].src} alt={`slide ${current + 1}`} />
        )}
        <a href="/products" className="hero-btn">Shop Now</a>
      </div>

      <button className="slider-btn next" onClick={goNext}>&#8250;</button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;