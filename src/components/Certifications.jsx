const certifications = [
  { name: "CompTIA Security+", provider: "CompTIA", year: "2022" },
  { name: "Certified Ethical Hacker (CEH)", provider: "EC-Council", year: "2023" },
  { name: "AWS Certified Security Specialist", provider: "AWS", year: "2023" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="min-h-screen bg-[#0D1117] text-white p-10">
      <h2 className="text-4xl font-extrabold text-blue-400 text-center">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
        {certifications.map((cert, index) => (
          <div key={index} className="glassmorphism p-6 rounded-lg shadow-lg hover-scale">
            <h3 className="text-xl font-semibold">{cert.name}</h3>
            <p className="text-gray-300">{cert.provider} - {cert.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
