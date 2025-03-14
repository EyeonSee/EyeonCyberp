import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0D1117] bg-opacity-90 backdrop-blur-lg shadow-lg text-white py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* 🌟 Logo */}
        <h1 className="text-2xl font-bold text-blue-400 tracking-wide">Ian Seetaram</h1>

        {/* 🌟 Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl focus:outline-none transition-transform transform active:scale-90"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* 🌟 Navbar Links */}
        <ul
          className={`md:flex md:space-x-8 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-[#0D1117] md:bg-transparent text-center md:text-left p-6 md:p-0 transition-all duration-300 ${
            isOpen ? "block shadow-lg rounded-lg" : "hidden md:flex"
          }`}
          onClick={() => setIsOpen(false)} // ✅ Close menu when clicking a link
        >
          <li className="py-2 md:py-0"><a href="#home" className="nav-link">Home</a></li>
          <li className="py-2 md:py-0"><a href="#resume" className="nav-link">Resume</a></li>
          <li className="py-2 md:py-0"><a href="#skills" className="nav-link">Skills</a></li>
          <li className="py-2 md:py-0"><a href="#certifications" className="nav-link">Certifications</a></li>
          <li className="py-2 md:py-0"><a href="#projects" className="nav-link">Projects</a></li>
          <li className="py-2 md:py-0"><a href="#testimonials" className="nav-link">Testimonials</a></li>
          <li className="py-2 md:py-0"><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
