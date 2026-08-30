import { Hero } from "@/components/portfolio/hero";
import { AboutSection } from "@/components/portfolio/about-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { EngineeringSection } from "@/components/portfolio/engineering-section";
import { ContactSection } from "@/components/portfolio/contact-section";

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EngineeringSection />
      <ContactSection />
    </main>
  );
}
