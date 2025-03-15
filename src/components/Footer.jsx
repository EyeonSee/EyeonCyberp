const Footer = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-lg text-white text-center p-6 mt-10">
      <p className="text-sm">&copy; {new Date().getFullYear()} Ian Seetaram. All Rights Reserved.</p>
      <div className="mt-3 flex justify-center space-x-6">
        <a href="https://linkedin.com/in/ian-seetaram" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
          LinkedIn
        </a>
        <a href="https://github.com/EyeonSee" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
          GitHub
        </a>
        <a href="mailto:ian.seetaram@pm.me" className="hover:text-red-400 transition-colors">
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
