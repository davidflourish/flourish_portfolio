import { InteractiveAbout } from '../components/InteractiveAbout';
import { ModernSkills } from '../components/ModernSkills';

export function AboutPage() {
  return (
    <main className="pt-16 sm:pt-20">
      <InteractiveAbout />
      <ModernSkills />
    </main>
  );
}