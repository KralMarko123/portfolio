import cypressPoster from "../assets/images/cypress.jpg";
import postsPoster from "../assets/images/posts.jpg";
import postsMobilePoster from "../assets/images/postsMobile.jpg";
import wbsPoster from "../assets/images/wbs.jpg";
import wbsMobilePoster from "../assets/images/wbs_mobile.jpg";
import travellandPoster from "../assets/images/travelland.jpg";
import designsPoster from "../assets/images/designs.jpg";
import designsMobilePoster from "../assets/images/designs_mobile.jpg";
import { FaCamera, FaGithub, FaLink } from "react-icons/fa";
import {ROUTES} from "./ROUTES";

export const PROJECTS = [
	{
		id: "postsByMarko",
		title: "Posts By Marko",
		poster: postsPoster,
		description:
			"A project I work on consistently trying to add features mimicking the SDLC. It is a post sharing website where users can register, share posts and see each others changes in real time using SignalR.",
		mobilePoster: postsMobilePoster,
		stack: [".NET", "C#", "EF", "xUnit", "PlayWright", "React", "CSS", "Docker"],
		links: [],
	},

	{
		id: "cypress",
		poster: cypressPoster,
		mobilePoster: cypressPoster,
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
		poster: wbsPoster,
		mobilePoster: wbsMobilePoster,
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

	//** TODO ADD REACT CHALLENGES SITE HERE

	{
		id: "travelland",
		poster: travellandPoster,
		mobilePoster: travellandPoster,
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

		poster: designsPoster,
		mobilePoster: designsMobilePoster,
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
