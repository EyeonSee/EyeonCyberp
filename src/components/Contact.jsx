import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(() => alert("Message Sent!"), (err) => console.log(err));
  };

  return (
    <section id="contact" className="min-h-screen px-10 py-16 bg-[#0a0f1a] text-white">
      <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">Contact Me</h2>
      <form onSubmit={sendEmail} className="max-w-lg mx-auto bg-black/30 p-6 rounded-lg shadow-lg space-y-4">
        <input type="text" name="name" placeholder="Your Name" className="w-full p-3 bg-gray-800 border border-gray-600 rounded" required />
        <input type="email" name="email" placeholder="Your Email" className="w-full p-3 bg-gray-800 border border-gray-600 rounded" required />
        <textarea name="message" placeholder="Your Message" className="w-full p-3 bg-gray-800 border border-gray-600 rounded h-32" required />
        <button type="submit" className="w-full bg-blue-500 p-3 rounded-lg text-white hover:bg-blue-600 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
