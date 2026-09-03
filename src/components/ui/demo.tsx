import { LogoMarquee, Logo } from "@/components/ui/logo-marquee";

export const logos: Logo[] = [
  { src: "/images/logo_ideas/earnbuddy.webp", alt: "EarnBuddy" },
  { src: "/images/logo_ideas/oditor.webp", alt: "Oditor" },
  { src: "/images/logo_ideas/polylearn.png", alt: "PolyLearn" },
  { src: "/images/logo_ideas/prayukti.png", alt: "Prayukti vLAB" },
  { src: "/images/logo_ideas/extrahand.png", alt: "ExtraHand" },
  { src: "/images/logo_ideas/laterally_inverted_studio.png", alt: "Laterally Inverted Studio" },
  { src: "/images/logo_ideas/pizza_project.png", alt: "Pizza Project" },
  { src: "/images/logo_ideas/quick_question.png", alt: "Quick Question" },
];

export default function LogoMarqueePreview() {
  return (
    <div className="flex w-full items-center justify-center bg-background py-16">
      <LogoMarquee logos={logos} />
    </div>
  );
}
