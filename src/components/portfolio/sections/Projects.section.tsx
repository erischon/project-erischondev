"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

import ProjectCard from "@/components/portfolio/Project.card";
import ProjectTag from "@/components/portfolio/ProjectTag";
import Section from "@/components/portfolio/Section";
import SectionTitle from "@/components/portfolio/SectionTitle";

import { projects } from "@/data/projects";

const ProjectsSection = () => {
  const [tag, setTag] = useState("Business Class Project");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: any) => {
    setTag(newTag);
  };

  const filteredProjects = projects.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <Section id="projects">
      <SectionTitle styles="mb-1 md:mb-4">Projets</SectionTitle>

      <p className="text-md text-slate-300 px-5 max-w-screen-md mx-auto">
        <span>
          Voici une liste de projets que j&apos;ai réalisés. Certains sont des
          projets personnels, d&apos;autres sont des projets réalisés dans le
          cadre de mon apprentissage.
        </span>

        <span className="flex py-3 text-xs italic">
          Les projets professionnels ne sont pas disponibles ici pour cause de
          confidentialité.
        </span>
      </p>

      <div className="text-slate-100 flex flex-row justify-center items-center gap-5 py-10">
        <ProjectTag
          onClick={handleTagChange}
          name="Business Class Project"
          isSelected={tag === "Business Class Project"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Mini Site"
          isSelected={tag === "Mini Site"}
        />
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              readmeUrl={project.readmeUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </Section>
  );
};

export default ProjectsSection;
