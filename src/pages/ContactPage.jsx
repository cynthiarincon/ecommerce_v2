import { useState } from 'react';

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-container">
        <img className="skinthia-logo" src="/assets/images/skinthia-logo.png" alt="skinthia logo" />
        <p>I will get back to you as soon as I can, thank you!</p>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <img className="skinthia-logo" src="/assets/images/skinthia-logo.png" alt="skinthia logo" />

      <div className="contact-form">
        <img src="/assets/images/skinthia-models.png" alt="smiling girl" />

        <form onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Contact Me</label> <br />
          <input
            type="text"
            id="contact-name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />
          <input
            type="email"
            id="contact-email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />
          <input
            className="message-box"
            type="text"
            id="contact-message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;