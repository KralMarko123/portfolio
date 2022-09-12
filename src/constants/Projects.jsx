import cypressVideo from "../assets/videos/cypress.mp4";
import cypressPoster from "../assets/images/cypressPoster.jpg";
import ecinmeaPoster from "../assets/images/ecinema.jpg";

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
		video: null,
		poster: ecinmeaPoster,
		title: "ECinema App",
		description:
			"A project I made during my studies. Features include invoice creation, excel imports/exports, cart management, Stripe payments.",
		stack: [".NET", "C#", "Bootstrap"],
		links: {
			git: "https://github.com/KralMarko123/ECinemaTicket",
			demo: "https://drive.google.com/file/d/1DB6NtPK3cIR21pPTPfaLolEbqGYGzD7o/view",
		},
	},
];
