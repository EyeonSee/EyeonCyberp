const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center relative px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-gray-900 opacity-30"></div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-400 relative">Cybersecurity & IT Expert</h1>
      <p className="text-lg mt-6 max-w-2xl text-gray-300 relative">
        Securing digital environments with <span className="text-green-400">ethical hacking</span> and <span className="text-yellow-400">penetration testing.</span>
      </p>
    </section>
  );
};

export default Hero;
