  import { useState } from "react";
  import "./Contact.css";

  function Contact() {
    const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
    });

    function handleChange(e) {
      setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
      e.preventDefault();
      alert("Thank you, " + form.name + "!");

      setForm({ name: "", email: "", message: "" });
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
            <label>Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label>Message</label>
            <textarea
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