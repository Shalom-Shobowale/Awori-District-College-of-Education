import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect this form to your email service or backend.
    alert("Your message is ready to be submitted.");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-adcoed-cream p-6 md:p-10">
      <h2
        className="mb-2"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.5rem, 4vw, 2rem)",
          lineHeight: 1.1,
          fontWeight: 400,
        }}
      >
        Send Us a Message
      </h2>

      <p className="text-adcoed-muted text-sm mb-8">
        Fill out the form below and we'll get back to you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="w-full p-3 border border-adcoed-border bg-white text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full p-3 border border-adcoed-border bg-white text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Subject</label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Message subject"
            required
            className="w-full p-3 border border-adcoed-border bg-white text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            rows="6"
            required
            className="w-full p-3 border border-adcoed-border bg-white text-sm resize-none"
          />
        </div>

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </div>
  );
}
