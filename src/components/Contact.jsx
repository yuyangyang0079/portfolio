// Contact.jsx or in your App.js



const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact Me</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-details">
          <h2>Get in Touch</h2>
          <p className="email">Email: example@example.com</p>
          <p className="phone">Phone: (123) 456-7890</p>
          {/* Optionally, add your social media links or address */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
