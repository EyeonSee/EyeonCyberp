const Resume = () => {
  return (
    <section id="resume" className="min-h-screen px-10 py-16 bg-[#0D1117] text-white">
      <h2 className="text-4xl font-extrabold text-blue-400 mb-10 text-center">Resume</h2>
      <div className="max-w-3xl mx-auto space-y-6 glassmorphism">
        <p className="text-lg text-gray-300">
          <span className="text-green-400">✔ Cybersecurity</span> | 
          <span className="text-yellow-400"> Network Security</span> | 
          <span className="text-red-400"> Cloud Security</span>
        </p>
        
        <h3 className="text-2xl font-bold text-blue-300">Work Experience</h3>
        <div className="space-y-3">
          <div>
            <h4 className="text-xl font-semibold">Cybersecurity Analyst</h4>
            <p className="text-gray-400">XYZ Security | 2021 - Present</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>Developed security monitoring solutions using Splunk & SIEM tools.</li>
              <li>Performed penetration testing to identify system vulnerabilities.</li>
              <li>Implemented security compliance for SOC2 & ISO 27001.</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold">Network Security Engineer</h4>
            <p className="text-gray-400">ABC Tech | 2018 - 2021</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>Configured firewalls and intrusion detection/prevention systems.</li>
              <li>Led cloud security implementation in AWS & Azure.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
