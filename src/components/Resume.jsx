const Resume = () => {
  return (
    <section id="resume" className="min-h-screen px-10 py-16 bg-[#0D1117] text-white">
      <h2 className="text-4xl font-extrabold text-blue-400 mb-10 text-center">Resume</h2>
      <div className="max-w-3xl mx-auto space-y-6 glassmorphism">
        <p className="text-lg text-gray-300">
          <span className="text-green-400">✔ Cybersecurity</span> | 
          <span className="text-yellow-400"> Network Security</span> | 
          <span className="text-red-400"> System Administration</span>
        </p>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3">
            ✅ <span>CompTIA Security+ Certified</span>
          </li>
          <li className="flex items-center space-x-3">
            ✅ <span>6+ Years Experience in IT & Cybersecurity</span>
          </li>
          <li className="flex items-center space-x-3">
            ✅ <span>Hands-on with Kali Linux, Metasploit, and Cloud Security</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
