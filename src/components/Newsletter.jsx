import { useState } from 'react';

function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="newsletter">
        <p>Thank you for subscribing! Check your email for exclusive offers.</p>
      </section>
    );
  }

  return (
    <section className="newsletter">
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="news-email">
          Join our monthly newsletter!
        </label>
        <br />
        <input
          className="news-input"
          type="email"
          id="news-email"
          name="news-email"
          placeholder="Email"
          required
        />
        <button className="news-btn" type="submit">JOIN</button>
        <p>
          *By entering your email here or anywhere on our site, you agree to receive 
          marketing emails from Skinthia. Unsubscribe at any time.
        </p>
      </form>
    </section>
  );
}

export default Newsletter;