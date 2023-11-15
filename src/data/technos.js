import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import {
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";

export const technos = [
  {
    name: "HTML",
    image: <FaHtml5 />,
  },
  {
    name: "CSS",
    image: <FaCss3Alt />,
  },
  {
    name: "Tailwind",
    image: <SiTailwindcss />,
  },
  {
    name: "Javascript",
    image: <SiJavascript />,
  },
  {
    name: "Typescript",
    image: <SiTypescript />,
  },
  {
    name: "React.js",
    image: <FaReact />,
  },
  {
    name: "Next.js",
    image: <TbBrandNextjs />,
  },
  {
    name: "Node.js",
    image: <FaNodeJs />,
  },
  {
    name: "Express",
    image: <SiExpress />,
  },
  {
    name: "MongoDB",
    image: <SiMongodb />,
  },
  {
    name: "Et d'autres",
    image: <BsThreeDots />,
  },
];
