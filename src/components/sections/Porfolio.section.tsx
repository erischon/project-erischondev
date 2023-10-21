import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/Project.card";

import { projects } from "@/data/projects";

export default function PortfolioSection() {
  return (
    <Section id="portfolio">
      <SectionTitle>Portfolio</SectionTitle>

      <div className="flex gap-10">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </Section>
  );
}
