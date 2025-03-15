import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-lg shadow-md text-white py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* 🌟 Logo */}
        <h1 className="text-2xl font-bold text-blue-400 tracking-wide">Ian Seetaram</h1>

        {/* 🌟 Horizontal Navbar Links */}
        <ul className="flex space-x-8">
          <li>
            <Link to="home" smooth={true} duration={500} className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="resume" smooth={true} duration={500} className="nav-link">Resume</Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} className="nav-link">Skills</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} className="nav-link">Projects</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
