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
    <section id="contact" className="min-h-screen p-10 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={sendEmail} className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" className="w-full p-2 bg-gray-800 border-none rounded" required />
        <input type="email" name="email" placeholder="Your Email" className="w-full p-2 bg-gray-800 border-none rounded" required />
        <textarea name="message" placeholder="Your Message" className="w-full p-2 bg-gray-800 border-none rounded" required />
        <button type="submit" className="bg-blue-500 px-6 py-2 rounded-full text-white hover:bg-blue-600">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
