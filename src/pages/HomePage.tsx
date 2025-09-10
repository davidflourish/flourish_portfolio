import { Hero } from '../components/Hero';
import { InteractiveAbout } from '../components/InteractiveAbout';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { ModernSkills } from '../components/ModernSkills';
import { ContactSection } from '../components/ContactSection';

export function HomePage() {
  return (
    <>
      <Hero />
      <InteractiveAbout />
      <ProjectShowcase />
      <ModernSkills />
      <ContactSection />
    </>
  );
}