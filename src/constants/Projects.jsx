import cypressPoster from "../assets/images/cypress.jpg";
import cypressVideo from "../assets/videos/cypress.mp4";
import postsPoster from "../assets/images/posts.jpg";
import postsMobilePoster from "../assets/images/postsMobile.jpg";
import postsVideo from "../assets/videos/postsVideo.mp4";
import postsMobileVideo from "../assets/videos/postsMobileVideo.mp4";
import wbsPoster from "../assets/images/wbs.jpg";
import wbsMobilePoster from "../assets/images/wbs_mobile.jpg";
import wbsVideo from "../assets/videos/wbs.mp4";
import wbsMobileVideo from "../assets/videos/wbs_mobile.mp4";
import yePoster from "../assets/images/ye.jpg";
import yeMobilePoster from "../assets/images/ye_mobile.jpg";
import yeVideo from "../assets/videos/ye.mp4";
import yeMobileVideo from "../assets/videos/ye_mobile.mp4";
import travellandPoster from "../assets/images/travelland.jpg";
import travellandVideo from "../assets/videos/travelland.mp4";
import designsPoster from "../assets/images/designs.jpg";
import designsMobilePoster from "../assets/images/designs_mobile.jpg";
import designsVideo from "../assets/videos/designs.mp4";
import designsMobileVideo from "../assets/videos/designs_mobile.mp4";
import { ROUTES } from "../routes/ROUTES";

export const PROJECTS = [
	{
		id: "posts",
		video: postsVideo,
		mobileVideo: postsMobileVideo,
		poster: postsPoster,
		mobilePoster: postsMobilePoster,
		title: "Posts By Marko",
		description:
			"A project I work on consistently trying to add features mimicking the SDLC. It poses as a post sharing website where users can register, share posts and see each others changes in real time using SignalR. It is currently hosted on Azure using a simple workflow.",
		stack: [".NET", "C#", "EF", "xUnit", "PlayWright", "React", "CSS"],
		links: {
			live: "https://posts.markomarkovikj.com",
		},
	},

	{
		id: "cypress",
		video: cypressVideo,
		mobileVideo: cypressVideo,
		poster: cypressPoster,
		mobilePoster: cypressPoster,
		title: "Cypress Test Framework",
		description:
			"A testing framework covering numerous placeholder sites using Cypress. It consists of written E2E scenarios covered with automated scripts.",
		stack: ["Cypress", "JS"],
		links: {
			git: "https://github.com/KralMarko123/test-automation-framework",
		},
	},

	{
		id: "nbaviewer",
		video: wbsVideo,
		mobileVideo: wbsMobileVideo,
		poster: wbsPoster,
		mobilePoster: wbsMobilePoster,
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
		mobileVideo: yeMobileVideo,
		poster: yePoster,
		mobilePoster: yeMobilePoster,
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
		mobileVideo: travellandVideo,
		poster: travellandPoster,
		mobilePoster: travellandPoster,
		title: "TravelLand Testing Framework",
		description:
			"A Selenium project covering the functionality of a travel agency app. The project includes DB, API & FE tests.",
		stack: ["C#", "Selenium", "NUnit", "POM"],
		links: {
			demo: "https://drive.google.com/file/d/1s2oANt2ce0uHpz_lYfkFdBx_mv314MbG/view?usp=sharing",
		},
	},

	{
		id: "designs",
		video: designsVideo,
		mobileVideo: designsMobileVideo,
		poster: designsPoster,
		mobilePoster: designsMobilePoster,
		title: "Design Portfolio",
		description:
			"All of the designs I've coded personally in order to practice my front-end skills or just try learning new tools.",
		stack: ["HTML", "CSS (SCSS)", "JS"],
		links: {
			page: ROUTES.designs,
		},
	},
];
