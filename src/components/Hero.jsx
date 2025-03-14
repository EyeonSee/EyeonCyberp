const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center relative px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-gray-900 opacity-50"></div>

      <h1 className="text-6xl font-bold text-blue-400 shadow-lg relative">Cybersecurity & IT Expert</h1>
      <p className="text-lg mt-4 max-w-2xl relative text-gray-300">
        Protecting digital landscapes with <span className="text-green-400">security expertise</span>, <span className="text-yellow-400">ethical hacking</span>, and <span className="text-red-400">penetration testing</span>.
      </p>
      <a href="/resume.pdf" className="mt-6 px-8 py-3 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-transform transform hover:scale-105 relative">
        Download Resume
      </a>
    </section>
  );
};

export default Hero;
