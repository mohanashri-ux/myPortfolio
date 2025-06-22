import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Education from './components/Education';

import './index.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
