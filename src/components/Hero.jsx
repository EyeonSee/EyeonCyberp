const Hero = () => {
    return (
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-gray-800 text-white">
        <h1 className="text-5xl font-bold">Cybersecurity & IT Professional</h1>
        <p className="text-lg mt-4">Specializing in network security, penetration testing, and cloud computing.</p>
        <a href="/resume.pdf" className="mt-6 bg-blue-500 px-6 py-3 rounded-full text-white hover:bg-blue-600">
          Download Resume
        </a>
      </section>
    );
  };
  
  export default Hero;
  