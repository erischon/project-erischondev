import { HiOutlineInformationCircle } from "react-icons/hi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { HiOutlineFolder } from "react-icons/hi";
import { MdMiscellaneousServices } from "react-icons/md";

export const routes = [
  {
    name: "A propos",
    url: "/#about",
    icon: <HiOutlineInformationCircle />,
  },
  {
    name: "Projects",
    url: "/#projects",
    icon: <HiOutlineFolder />,
  },
  {
    name: "Services",
    url: "/#services",
    icon: <MdMiscellaneousServices />,
  },
  {
    name: "Contact",
    url: "/#contact",
    icon: <HiOutlineChatBubbleLeftRight />,
  },
];
