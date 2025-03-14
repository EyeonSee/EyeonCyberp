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
          className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-[#0D1117] md:bg-transparent text-center md:text-left p-6 md:p-0 transition-all duration-300 ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          <li className="py-2 md:py-0">
            <a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>Home</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#resume" className="nav-link" onClick={() => setIsOpen(false)}>Resume</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>Skills</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#certifications" className="nav-link" onClick={() => setIsOpen(false)}>Certifications</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#testimonials" className="nav-link" onClick={() => setIsOpen(false)}>Testimonials</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
