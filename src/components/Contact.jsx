import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen px-10 py-16 bg-[#0D1117] text-white">
      <h2 className="text-4xl font-extrabold text-blue-400 mb-10 text-center">Contact Me</h2>
      <form className="max-w-lg mx-auto glassmorphism p-6 rounded-lg shadow-lg space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-900 border border-gray-700 rounded" required />
        <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-900 border border-gray-700 rounded" required />
        <textarea placeholder="Your Message" className="w-full p-3 bg-gray-900 border border-gray-700 rounded h-32" required />
        <button type="submit" className="w-full bg-blue-500 p-3 rounded-lg text-white hover:bg-blue-600 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
