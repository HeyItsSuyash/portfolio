import Hero from "@/components/Hero";
import Who from "@/components/Who";
import What from "@/components/What";
import Why from "@/components/Why";
import Projects from "@/components/Projects";
import When from "@/components/When";
import How from "@/components/How";

const SECTIONS = [
  { id: 'hero', type: 'hero' },
  { id: 'who', type: 'who' },
  { id: 'what', type: 'what' },
  { id: 'why', type: 'why' },
  { id: 'where', type: 'projects' },
  { id: 'when', type: 'when' },
  { id: 'how', type: 'how' },
];

export default function Home() {
  return (
    <main>
      {SECTIONS.map(sec => {
        if (sec.type === 'hero') return <Hero key={sec.id} id={sec.id} />;
        if (sec.type === 'who') return <Who key={sec.id} id={sec.id} />;
        if (sec.type === 'what') return <What key={sec.id} id={sec.id} />;
        if (sec.type === 'why') return <Why key={sec.id} id={sec.id} />;
        if (sec.type === 'projects') return <Projects key={sec.id} id={sec.id} />;
        if (sec.type === 'when') return <When key={sec.id} id={sec.id} />;
        if (sec.type === 'how') return <How key={sec.id} id={sec.id} />;
        return null;
      })}
    </main>
  );
}



