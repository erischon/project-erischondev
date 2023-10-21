import Image from "next/image";
import { BiLinkAlt } from "react-icons/bi";

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  url: string;
};

export default function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <article className="flex flex-col">
      <Image
        src={project.image}
        alt={project.title}
        width={500}
        height={500}
        loading="lazy"
        className="object-cover mb-3"
      />

      <div className="pr-5">
        <h3 className="font-semibold text-xl mb-3">{project.title}</h3>

        <div className="flex items-start gap-x-2">
          <p className="text-xs text-slate-100/70">{project.description}</p>

          <button className="">
            <BiLinkAlt className="text-4xl text-slate-100 bg-purple-600 rounded-full p-2" />
          </button>
        </div>
      </div>
    </article>
  );
}
