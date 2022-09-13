import cypressVideo from "../assets/videos/cypress.mp4";
import cypressPoster from "../assets/images/cypress.jpg";
import ecinemaVideo from "../assets/videos/ecinema.mp4";
import ecinemaPoster from "../assets/images/ecinema.jpg";
import wbsVideo from "../assets/videos/wbs.mp4";
import wbsPoster from "../assets/images/wbs.jpg";
import yeVideo from "../assets/videos/ye.mp4";
import yePoster from "../assets/images/ye.jpg";
import travellandVideo from "../assets/videos/travelland.mp4";
import travellandPoster from "../assets/images/travelland.jpg";

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
			demo: "https://drive.google.com/file/d/1DB6NtPK3cIR21pPTPfaLolEbqGYGzD7o/view?usp=sharing",
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

	{
		id: "yecardgame",
		video: yeVideo,
		poster: yePoster,
		title: "Ye Memory Game",
		description:
			"A simple card game featuring me and my friends. Kill some time and try to finish it before the timer runs out.",
		stack: ["React", "CSS"],
		links: {
			git: "https://github.com/KralMarko123/ye-memory-game",
			live: "https://kralmarko123.github.io/ye-memory-game/",
		},
	},

	{
		id: "travelland",
		video: travellandVideo,
		poster: travellandPoster,
		title: "TravelLand Testing Framework",
		description:
			"A Selenium project covering the functionality of a travel agency app. The project includes DB, API & FE tests.",
		stack: ["C#", "Selenium", "NUnit", "POM"],
		links: {
			git: "https://github.com/viktorijaMi/TravelLand/tree/marko-testing",
			demo: "https://drive.google.com/file/d/1s2oANt2ce0uHpz_lYfkFdBx_mv314MbG/view?usp=sharing",
		},
	},
];
