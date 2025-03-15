import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen p-10 bg-[#0D1117] text-white">
      <h2 className="text-4xl font-bold text-blue-400 text-center">Contact</h2>
      <form onSubmit={sendEmail} className="max-w-lg mx-auto mt-6">
        <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 mb-3 bg-[#121826] border border-gray-700 rounded focus:outline-none focus:border-blue-400" />
        <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 mb-3 bg-[#121826] border border-gray-700 rounded focus:outline-none focus:border-blue-400" />
        <textarea name="message" placeholder="Your Message" required className="w-full p-3 h-32 bg-[#121826] border border-gray-700 rounded focus:outline-none focus:border-blue-400"></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded mt-3 hover:bg-blue-600 transition">Send</button>
      </form>
    </section>
  );
};

export default Contact;
