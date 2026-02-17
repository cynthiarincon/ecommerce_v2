function Hero() {
  return (
    <div className="hero">
      <video className="hero-vid" autoPlay loop muted playsInline> 
        <source src="/assets/videos/face-cleaning.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <a href="/products" className="hero-btn">Shop Now</a>
    </div>
  );
}

export default Hero;