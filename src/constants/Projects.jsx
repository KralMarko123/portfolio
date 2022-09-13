import cypressVideo from "../assets/videos/cypress.mp4";
import cypressPoster from "../assets/images/cypress.jpg";
import ecinemaVideo from "../assets/videos/ecinema.mp4";
import ecinemaPoster from "../assets/images/ecinema.jpg";
import wbsVideo from "../assets/videos/wbs.mp4";
import wbsPoster from "../assets/images/wbs.jpg";

export const PROJECTS = [
	{
		id: "cypress",
		video: cypressVideo,
		poster: cypressPoster,
		title: "Cypress Test Framework",
		description:
			"A testing framework covering numerous placeholder sites using Cypress. It consists of written E2E scenarios covered with automated scripts.",
		stack: ["Cypress", "JavaScript"],
		links: {
			git: "https://github.com/KralMarko123/test-automation-framework",
		},
	},

	{
		id: "ecinema",
		video: ecinemaVideo,
		poster: ecinemaPoster,
		title: "ECinema App",
		description:
			"A project I made during my studies. Features include invoice creation, excel imports/exports, cart management, Stripe payments.",
		stack: [".NET", "C#", "Bootstrap", "EF", "MySQL"],
		links: {
			git: "https://github.com/KralMarko123/ECinemaTicket",
			demo: "https://drive.google.com/file/d/1DB6NtPK3cIR21pPTPfaLolEbqGYGzD7o/view",
		},
	},

	{
		id: "nbaviewer",
		video: wbsVideo,
		poster: wbsPoster,
		title: "WBS NBA Viewer",
		description:
			"A React app that sends out SPARQL queries using a third party library. It fetches NBA players from an RDF database and renders the results accordingly.",
		stack: ["React", "CSS", "Cypress"],
		links: {
			git: "https://github.com/KralMarko123/wbs-nba-viewer",
			live: "https://kralmarko123.github.io/wbs-nba-viewer/",
		},
	},
];
