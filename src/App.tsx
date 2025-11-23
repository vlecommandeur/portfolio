import { ThemeToggle } from './components/ThemeToggle';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Starfield } from './components/Starfield';
import './styles/globals.css';

function App() {
  return (
    <div className="app">
      <Starfield />
      <ThemeToggle />
      <Navigation />

      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
