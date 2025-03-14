const Footer = () => {
  return (
    <footer className="bg-[#121826] text-white text-center p-6 mt-10">
      <p className="text-sm">&copy; {new Date().getFullYear()} Ian Seetaram. All Rights Reserved.</p>
      <div className="mt-2 flex justify-center space-x-6">
        <a href="https://linkedin.com/in/ian-seetaram" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
          LinkedIn
        </a>
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
          GitHub
        </a>
        <a href="mailto:ian.seetaram@pm.me" className="hover:text-red-400 transition">
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
