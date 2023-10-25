import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { CgPerformance } from "react-icons/cg";
import { BsTools } from "react-icons/bs";
import { PiToolboxBold } from "react-icons/pi";

export const services = [
  {
    name: "Développement",
    icon: <HiOutlineComputerDesktop />,
    description: "Développement d'applications web sur mesure.",
  },
  {
    name: "Maintenance",
    icon: <BsTools />,
    description: "Maintenance et évolution de votre application web.",
  },
  {
    name: "Optimisation",
    icon: <CgPerformance />,
    description:
      "Optimisation des performances et de l'accessibilité de votre application web.",
  },
  {
    name: "Ressource externe",
    icon: <PiToolboxBold />,
    description: "Développement de sites web et d'applications web sur mesure.",
  },
];
