import { Link } from "react-scroll";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-lg shadow-md text-white py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400 tracking-wide">Ian Seetaram</h1>

        {/* Desktop Nav Links (Always Visible) */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="home" smooth={true} duration={500} offset={-80} className="nav-link hover:text-blue-400 transition-colors">Home</Link>
          </li>
          <li>
            <Link to="resume" smooth={true} duration={500} offset={-80} className="nav-link hover:text-blue-400 transition-colors">Resume</Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} offset={-80} className="nav-link hover:text-blue-400 transition-colors">Skills</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} offset={-80} className="nav-link hover:text-blue-400 transition-colors">Projects</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-80} className="nav-link hover:text-blue-400 transition-colors">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl transition-transform transform active:scale-90" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav Links (Only Visible When isOpen is True) */}
      <div className={`fixed top-0 right-0 w-64 h-full bg-black/80 backdrop-blur-lg transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
        <button 
          className="absolute top-5 right-5 text-3xl text-white"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>

        <ul className="flex flex-col items-center justify-center h-full space-y-6">
          <li>
            <Link to="home" smooth={true} duration={500} offset={-80} className="nav-link hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="resume" smooth={true} duration={500} offset={-80} className="nav-link hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>Resume</Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} offset={-80} className="nav-link hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>Skills</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} offset={-80} className="nav-link hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>Projects</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-80} className="nav-link hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
