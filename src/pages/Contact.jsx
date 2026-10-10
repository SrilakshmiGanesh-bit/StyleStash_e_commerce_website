import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("Thank you, " + form.name + "! Your message has been received.");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Have a question? We would love to hear from you.</p>

      <div className="contact-content">
        <div>
          <h2>Get in Touch</h2>
          <p>Email: support@stylestash.com</p>
          <p>Location: Nagercoil, Tamil Nadu</p>
          <p>Hours: Monday – Saturday, 9 AM – 6 PM</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
