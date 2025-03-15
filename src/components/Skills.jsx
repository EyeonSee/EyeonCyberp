const skills = [
  { name: "Penetration Testing", icon: "🛡️" },
  { name: "Network Security", icon: "🌐" },
  { name: "Cloud Security", icon: "☁️" },
  { name: "Kali Linux & Metasploit", icon: "🐧" },
  { name: "Security Compliance (SOC2, ISO 27001)", icon: "📜" },
  { name: "Python for Cybersecurity", icon: "🐍" },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-[#0D1117] text-white p-10">
      <h2 className="text-4xl font-extrabold text-blue-400 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="bg-[#121826] p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:shadow-xl hover:scale-105 transition-transform">
            <span className="text-4xl">{skill.icon}</span>
            <h3 className="text-xl font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
