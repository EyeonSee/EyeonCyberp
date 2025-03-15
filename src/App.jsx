// App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-[#0D1117] text-white">
      <Navbar /> {/* Render Navbar only once */}
      <Hero />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
