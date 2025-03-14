import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0D1117] text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* 🌟 Brand Logo */}
        <h1 className="text-3xl font-bold text-blue-400">Ian Seetaram</h1>

        {/* 🌟 Hamburger Button (Mobile) */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl focus:outline-none">
          {isOpen ? "✖" : "☰"}
        </button>

        {/* 🌟 Navbar Links */}
        <ul className={`md:flex md:space-x-6 absolute md:relative top-16 md:top-0 w-full md:w-auto bg-[#0D1117] md:bg-transparent text-center md:text-left p-4 md:p-0 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
          <li className="py-2 md:py-0"><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
          <li className="py-2 md:py-0"><a href="#resume" className="hover:text-blue-400 transition">Resume</a></li>
          <li className="py-2 md:py-0"><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
          <li className="py-2 md:py-0"><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
