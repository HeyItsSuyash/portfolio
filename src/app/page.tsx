import Image from 'next/image';
import Hero from '@/components/Hero';
import About from '@/components/About';
import RootsTimeline from '@/components/RootsTimeline';
import Projects from '@/components/Projects';
import HangingSkills from '@/components/HangingSkills';
import Education from '@/components/Education';
import Achievements from '@/components/Achievements';
import SocialPresence from '@/components/SocialPresence';
import TactileTerminal from '@/components/TactileTerminal';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      
      <div className="light-section">
        <About />
      </div>

      <div className="dark-section">
        <RootsTimeline />
      </div>

      <div className="light-section">
        <Projects />
      </div>

      <div className="dark-section">
        <HangingSkills />
      </div>

      <div className="light-section">
        <Education />
      </div>

      <div className="dark-section">
        <Achievements />
      </div>

      <div id="development" className="light-section">
        <SocialPresence />
        <div style={{ height: '80px' }} />
        
        <div className="section-title">Ecosystem & Growth</div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
          <Image 
            src="/images/avatar-images/usinglaptop.gif" 
            alt="Development" 
            width={800} 
            height={450} 
            unoptimized
            style={{ 
              mixBlendMode: 'screen', 
              filter: 'contrast(1.2) brightness(1.1)',
              maxWidth: '90vw',
              height: 'auto'
            }}
          />
        </div>

        <div className="section-title">Developer Console</div>
        <TactileTerminal />
        <div style={{ height: '80px' }} />
      </div>
      
      <Footer />
    </main>
  );
}

