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

        {/* Desktop Nav Links (Hidden on Mobile) */}
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

        {/* Mobile Menu Button (Visible on Mobile) */}
        <button
          className="md:hidden text-2xl transition-transform transform active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav Links (Visible When Menu is Open) */}
      <div
        className={`fixed top-16 right-0 w-full bg-black/80 backdrop-blur-lg transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
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
