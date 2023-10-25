import Link from "next/link";

import {
  HiCodeBracket,
  HiOutlineEye,
  HiOutlineBookOpen,
} from "react-icons/hi2";

type ProjectCardProps = {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
  readmeUrl: string;
};

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  readmeUrl,
}: ProjectCardProps) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "top left",
        }}
      >
        <div className="overlay items-center justify-center flex-col gap-3 absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <div className="flex w-full justify-center items-center gap-3">
            <Link
              href={gitUrl}
              target="_blank"
              aria-label="Github Link"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <HiCodeBracket className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>

            <Link
              href={previewUrl}
              target="_blank"
              aria-label="Preview Link"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <HiOutlineEye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          </div>

          <Link
            href={readmeUrl}
            target="_blank"
            aria-label="Readme Link"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <HiOutlineBookOpen className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>

      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
