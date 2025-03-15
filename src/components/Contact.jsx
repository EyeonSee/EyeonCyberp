import emailjs from "emailjs-com";  // ✅ Ensure correct import

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
    <section id="contact" className="min-h-screen p-10">
      <h2 className="text-4xl font-bold text-blue-400">Contact</h2>
      <form onSubmit={sendEmail} className="max-w-lg mx-auto">
        <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 mb-3 border rounded" />
        <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 mb-3 border rounded" />
        <textarea name="message" placeholder="Your Message" required className="w-full p-3 h-32 border rounded"></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded mt-3">Send</button>
      </form>
    </section>
  );
};

export default Contact;
