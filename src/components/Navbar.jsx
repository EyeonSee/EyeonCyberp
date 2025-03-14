import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#121826] text-white p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-highlight glow">Ian Seetaram</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          ☰
        </button>
        <ul className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"}`}>
          <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
          <li><a href="#resume" className="hover:text-blue-400 transition">Resume</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
