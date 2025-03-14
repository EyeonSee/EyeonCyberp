const Resume = () => {
  return (
    <section id="resume" className="min-h-screen px-10 py-16 bg-[#0a0f1a] text-white">
      <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">Resume</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        <p className="flex items-center space-x-2">
          <span>📍</span> <span>Cybersecurity | Network Security | System Administration</span>
        </p>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            ✅ <span>CompTIA Security+ Certified</span>
          </li>
          <li className="flex items-center space-x-2">
            ✅ <span>6+ Years Experience in IT & Cybersecurity</span>
          </li>
          <li className="flex items-center space-x-2">
            ✅ <span>Hands-on with Kali Linux, Metasploit, and Cloud Security</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
