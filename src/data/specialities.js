import { FaRegUser } from "react-icons/fa";
import { FaArrowsToCircle } from "react-icons/fa6";
import { GrValidate } from "react-icons/gr";

export const specialities = [
  {
    title: "Le Client",
    icon: <FaRegUser />,
    description:
      "Ecouter et comprendre les besoins du client pour l'accompagner dans sa prise de décision.",
  },
  {
    title: "L'Equipe",
    icon: <FaArrowsToCircle />,
    description:
      "Travailler en coordination et en bonne intelligence avec les autres intervenants du projets, afin d'atteindre les objectifs fixés.",
  },
  {
    title: "La Qualité",
    icon: <GrValidate />,
    description:
      "Fournir un résultat de qualité, qui va répondre aux attentes du client, qui est fiable et maintenable.",
  },
];
