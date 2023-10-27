import cypressThumbnail from "../assets/images/projects thumbnails/cypressThumbnail.jpg";
import postsByMarkoThumbnail from "../assets/images/projects thumbnails/postsByMarkoThumbnail.png";
import postsByMarkoMobileThumbnail from "../assets/images/projects thumbnails/postsByMarkoMobileThumbnail.png";
import wbsThumbnail from "../assets/images/projects thumbnails/wbsThumbnail.jpg";
import wbsMobileThumbnail from "../assets/images/projects thumbnails/wbsMobileThumbnail.jpg";
import travellandThumbnail from "../assets/images/projects thumbnails/travellandThumbnail.jpg";
import designsThumbnail from "../assets/images/projects thumbnails/designsThumbnail.jpg";
import designsMobileThumbnail from "../assets/images/projects thumbnails/designsMobileThumbnail.jpg";
import reactChallengesThumbnail from "../assets/images/projects thumbnails/reactChallengesThumbnail.png";
import reactChallengesMobileThumbnail from "../assets/images/projects thumbnails/reactChallengesMobileThumbnail.png";
import { FaCamera, FaGithub, FaLink } from "react-icons/fa";
import { ROUTES } from "./ROUTES";

export const PROJECTS = [
	{
		id: "postsByMarko",
		title: "Posts By Marko",
		thumbnail: postsByMarkoThumbnail,
		mobileThumbnail: postsByMarkoMobileThumbnail,
		description:
			"A project I work on consistently trying to add features mimicking the SDLC. It is a post sharing website where users can register, share posts and see each others changes in real time using SignalR.",
		stack: [".NET", "C#", "EF", "xUnit", "PlayWright", "React", "CSS", "Docker"],
		links: [],
	},

	{
		id: "reactChallenges",
		title: "React Challenges",
		thumbnail: reactChallengesThumbnail,
		mobileThumbnail: reactChallengesMobileThumbnail,
		description:
			"A collection of different challenges written in React. Point of the site is for me to have a space to practice different skills/solutions explicitly in React.",
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
	},

	{
		id: "cypress",
		thumbnail: cypressThumbnail,
		mobileThumbnail: cypressThumbnail,
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
	},

	{
		id: "nbaviewer",
		thumbnail: wbsThumbnail,
		mobileThumbnail: wbsMobileThumbnail,
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
	},

	{
		id: "travelland",
		thumbnail: travellandThumbnail,
		mobileThumbnail: travellandThumbnail,
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
	},

	{
		id: "designs",
		thumbnail: designsThumbnail,
		mobileThumbnail: designsMobileThumbnail,
		title: "Design Portfolio",
		description:
			"All of the designs I've coded personally in order to practice my front-end skills or just try learning new tools.",
		stack: ["REACT", "HTML", "CSS (SCSS)", "JS"],
		links: [
			{
				url: ROUTES.DESIGNS,
				internal: true,
				text: "See them here",
				icon: <FaLink />,
			},
		],
	},
];
