const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-[#0a0f1a] text-white">
      <h1 className="text-5xl font-bold text-highlight glow">Cybersecurity & IT Professional</h1>
      <p className="text-lg mt-4 max-w-xl">
        Passionate about <span className="text-highlight">network security</span>, 
        <span className="text-highlight"> ethical hacking</span>, and <span className="text-highlight">cloud security</span>.
      </p>
      <a href="/resume.pdf" className="mt-6 bg-blue-500 px-6 py-3 rounded-full text-white hover:bg-blue-600 transition-transform transform hover:scale-105">
        Download Resume
      </a>
    </section>
  );
};

export default Hero;
