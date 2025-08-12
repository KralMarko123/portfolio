import cypressThumbnail from "../assets/images/projects thumbnails/cypressThumbnail.jpg";
import postsByMarkoThumbnail from "../assets/images/projects thumbnails/postsByMarkoThumbnail.jpg";
import postsByMarkoMobileThumbnail from "../assets/images/projects thumbnails/postsByMarkoMobileThumbnail.jpg";
import wbsThumbnail from "../assets/images/projects thumbnails/wbsThumbnail.jpg";
import wbsMobileThumbnail from "../assets/images/projects thumbnails/wbsMobileThumbnail.jpg";
import travellandThumbnail from "../assets/images/projects thumbnails/travellandThumbnail.jpg";
import designsThumbnail from "../assets/images/projects thumbnails/designsThumbnail.jpg";
import designsMobileThumbnail from "../assets/images/projects thumbnails/designsMobileThumbnail.jpg";
import reactChallengesThumbnail from "../assets/images/projects thumbnails/reactChallengesThumbnail.jpg";
import reactChallengesMobileThumbnail from "../assets/images/projects thumbnails/reactChallengesMobileThumbnail.jpg";
import { FaCamera, FaGithub, FaLink } from "react-icons/fa";
import { ROUTES } from "./ROUTES";

export const PROJECTS = [
  {
    id: "postsByMarko",
    title: "Posts By Marko",
    description:
      "A project I work on consistently trying to add features mimicking the SDLC. It is a post sharing website where users can register, share posts and see each others changes in real time using SignalR.",
    stack: [
      ".NET",
      "C#",
      "EF",
      "xUnit",
      "PlayWright",
      "React",
      "CSS",
      "Docker",
    ],
    links: [
      {
        url: "https://github.com/KralMarko123/PostsByMarko",
        text: "See the code",
        icon: <FaGithub />,
      },
    ],
    thumbnail: postsByMarkoThumbnail,
    mobileThumbnail: postsByMarkoMobileThumbnail,
    extraParagraph: "This project will be live soon!",
  },

  {
    id: "reactChallenges",
    title: "React Challenges",
    description:
      "A collection of diverse challenges written in React. The purpose of the site is to provide a space for me to enhance my skills and problem solving in React.",
    stack: ["React", "CSS"],
    links: [
      {
        url: "https://github.com/KralMarko123/react-challenges",
        text: "See the code",
        icon: <FaGithub />,
      },
      {
        url: "https://kralmarko123.github.io/react-challenges/",
        text: "Visit the site",
        icon: <FaLink />,
      },
    ],
    thumbnail: reactChallengesThumbnail,
    mobileThumbnail: reactChallengesMobileThumbnail,
  },

  {
    id: "cypress",
    title: "Cypress Test Framework",
    description:
      "A testing framework covering numerous placeholder sites using Cypress. It consists of written E2E scenarios covered with automated scripts.",
    stack: ["Cypress", "JS"],
    links: [
      {
        url: "https://github.com/KralMarko123/test-automation-framework",
        text: "See the code",
        icon: <FaGithub />,
      },
    ],
    thumbnail: cypressThumbnail,
    mobileThumbnail: cypressThumbnail,
  },

  {
    id: "nbaviewer",
    title: "Web Based Systems NBA Viewer",
    description:
      "A React app that sends out SPARQL queries using a third party library. It fetches NBA players from an RDF database and renders the results accordingly.",
    stack: ["React", "CSS", "Cypress"],
    links: [
      {
        url: "https://github.com/KralMarko123/wbs-nba-viewer",
        text: "See the code",
        icon: <FaGithub />,
      },
      {
        url: "https://kralmarko123.github.io/wbs-nba-viewer/",
        text: "Visit the site",
        icon: <FaLink />,
      },
    ],
    thumbnail: wbsThumbnail,
    mobileThumbnail: wbsMobileThumbnail,
  },

  {
    id: "travelland",
    title: "TravelLand Testing Framework",
    description:
      "A Selenium project covering the functionality of a travel agency app. The project includes DB, API & FE tests.",
    stack: ["C#", "Selenium", "NUnit", "POM"],
    links: [
      {
        url: "https://www.youtube.com/watch?v=kaUjHGW3gNw",
        text: "Demo video",
        icon: <FaCamera />,
      },
    ],
    thumbnail: travellandThumbnail,
    mobileThumbnail: travellandThumbnail,
  },

  {
    id: "designs",
    title: "Design Portfolio",
    description:
      "Numerous challenges and designs I have coded personally in order to better my frontend skills or pick up new tools.",
    stack: ["React", "HTML", "CSS (SCSS)", "JS"],
    links: [
      {
        url: ROUTES.DESIGNS,
        internal: true,
        text: "See them here",
        icon: <FaLink />,
      },
    ],
    thumbnail: designsThumbnail,
    mobileThumbnail: designsMobileThumbnail,
  },
];
