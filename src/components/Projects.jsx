const projects = [
  {
    title: "Splunk Security Monitoring",
    description: "Built a security monitoring environment in Splunk to analyze threats.",
  },
  {
    title: "CTF Penetration Testing",
    description: "Participated in a Capture the Flag competition using Kali Linux and Metasploit.",
  },
  {
    title: "Azure Cloud Security",
    description: "Deployed and secured a cloud-based web application on Microsoft Azure.",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen p-10 bg-[#0a0f1a] text-white">
      <h2 className="text-4xl font-bold text-highlight mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#121826] p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-highlight">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
