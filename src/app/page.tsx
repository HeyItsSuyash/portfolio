import Hero from '@/components/Hero';
import About from '@/components/About';
import RootsTimeline from '@/components/RootsTimeline';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <RootsTimeline />
      <Projects />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
    </main>
  );
}
