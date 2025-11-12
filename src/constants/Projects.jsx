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
import leetcodeSolutionsThumbnail from "../assets/images/projects thumbnails/leetcodeSolutionsThumbnail.png";
import leetcodeSolutionsMobileThumbnail from "../assets/images/projects thumbnails/leetcodeSolutionsMobileThumbnail.png";
import trackerThumbnail from "../assets/images/projects thumbnails/trackerThumbnail.png";
import trackerMobileThumbnail from "../assets/images/projects thumbnails/trackerMobileThumbnail.png";
import { FaCamera, FaGithub, FaLink } from "react-icons/fa";
import { ROUTES } from "./ROUTES";

export const PROJECTS = [
  {
    id: "postsByMarko",
    title: "Posts By Marko",
    description:
      "A project I work on consistently trying to add features mimicking the SDLC. It is a post sharing website where users can register, share posts, chat and see each others changes in real time using SignalR.",
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
  },

  {
    id: "tracker",
    title: "MindLeaps Tracker",
    description:
      "A data-driven Monitoring & Evaluation (M&E) system that measures changes in cognitive skills and social-emotional learning. ",
    stack: [
      "Ruby on Rails",
      "Stimulus",
      "Capybara",
      "Tailwind",
      "Kotlin",
      "Android",
    ],
    links: [
      {
        url: "https://github.com/MindLeaps/tracker",
        text: "See the code",
        icon: <FaGithub />,
      },
      {
        url: "https://mindleapstracker.org/",
        text: "Visit the site",
        icon: <FaLink />,
      },
    ],
    thumbnail: trackerThumbnail,
    mobileThumbnail: trackerMobileThumbnail,
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
    id: "leetcodeSolutions",
    title: "Leetcode Solutions",
    description:
      "A page containing solutions I've written for leetcode problems. The purpose of this page is to showcase my personal approach when coming up against these problems, and how I incorporate my problem-solving skills to finish them.",
    stack: ["React", "CSS", "C#"],
    links: [
      {
        url: "https://github.com/KralMarko123/leetcode-solutions",
        text: "See the code",
        icon: <FaGithub />,
      },
      {
        url: "https://kralmarko123.github.io/leetcode-solutions/",
        text: "Visit the site",
        icon: <FaLink />,
      },
    ],
    thumbnail: leetcodeSolutionsThumbnail,
    mobileThumbnail: leetcodeSolutionsMobileThumbnail,
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
