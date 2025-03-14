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
      title: "Azure Cloud Application Security",
      description: "Deployed and secured a cloud-based web application on Microsoft Azure.",
    }
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="min-h-screen p-10 bg-gray-800 text-white">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  