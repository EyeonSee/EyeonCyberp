import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center relative pt-16 bg-gradient-to-br from-blue-900 via-black to-gray-900">
      {/* Navbar height is 4rem (16 * 4 = 64px), so pt-16 is added */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold text-blue-400 relative"
      >
        Cybersecurity & IT Expert
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg mt-4 max-w-2xl text-gray-300 relative"
      >
        Protecting digital landscapes with <span className="text-green-400">ethical hacking</span> and{" "}
        <span className="text-yellow-400">penetration testing.</span>
      </motion.p>

      <motion.a
        href="/resume.pdf"
        download
        className="mt-6 px-8 py-3 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-transform transform hover:scale-105 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Download Resume
      </motion.a>
    </section>
  );
};

export default Hero;
