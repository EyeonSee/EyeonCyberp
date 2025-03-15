const Resume = () => {
  return (
    <section id="resume" className="min-h-screen p-10">
      <h2 className="text-4xl font-bold text-blue-400 text-center">Resume</h2>
      <div className="max-w-3xl mx-auto glassmorphism p-6 rounded-lg shadow-md mt-6">
        <p className="text-lg text-gray-300">
          <span className="text-green-400">✔ Cybersecurity</span> | 
          <span className="text-yellow-400"> Network Security</span> | 
          <span className="text-red-400"> Cloud Security</span>
        </p>
      </div>
    </section>
  );
};

export default Resume;
