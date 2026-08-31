import BurstScrollHandler from "@/components/BurstScrollHandler";
import Hero from "@/components/Hero";
import Who from "@/components/Who";
import Why from "@/components/Why";
import What from "@/components/What";

const CYCLES = 10;
const BASE_SECTIONS = [
  { key: 'hero', type: 'hero', theme: '' },
  { key: 'who', type: 'who', theme: '' },
  { key: 'what', type: 'what', theme: '' },
  { key: 'why', type: 'why', theme: '' },
  { key: 'where', type: 'generic', title: 'Where', theme: 'dark-section' },
  { key: 'when', type: 'generic', title: 'When', theme: 'light-section' },
  { key: 'how', type: 'generic', title: 'How', theme: 'dark-section' },
];

export default function Home() {
  const allSections: { id: string; type: string; title?: string; theme: string }[] = [];
  
  for (let c = 1; c <= CYCLES; c++) {
    const suffix = c === 1 ? '' : `-${c}`;
    BASE_SECTIONS.forEach(s => {
      allSections.push({
        id: `${s.key}${suffix}`,
        type: s.type,
        title: s.title,
        theme: s.theme
      });
    });
  }

  return (
    <main>
      <BurstScrollHandler />
      {allSections.map(sec => {
        if (sec.type === 'hero') return <Hero key={sec.id} id={sec.id} />;
        if (sec.type === 'who') return <Who key={sec.id} id={sec.id} />;
        if (sec.type === 'what') return <What key={sec.id} id={sec.id} />;
        if (sec.type === 'why') return <Why key={sec.id} id={sec.id} />;
        return (
          <section key={sec.id} id={sec.id} className={`snap-section ${sec.theme}`}>
            <div className="section-title">{sec.title}</div>
          </section>
        );
      })}
    </main>
  );
}
