import { FaMailBulk, FaGithub, FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import markoCV from "../assets/pdfs/Marko Markovikj CV.pdf";

export const CONTACT_LINKS = [
  {
    link: "mailto:kralmarko123@gmail.com",
    icon: <FaMailBulk />,
  },

  {
    link: "https://github.com/KralMarko123",
    icon: <FaGithub />,
  },

  {
    link: "https://www.linkedin.com/in/marko-markovikj/",
    icon: <FaLinkedin />,
  },

  {
    link: markoCV,
    icon: <TbFileCv />,
  },
];
