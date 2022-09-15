import timeTrackingPoster from "../assets/images/timeTracking.jpg";
import articlePoster from "../assets/images/article.jpg";
import baseApparelPoster from "../assets/images/baseApparel.jpg";

const DESIGNS_BASE_URL = "https://designs.markomarkovikj.com";

export const DESIGNS = [
	{
		title: "Time Tracking Dashboard",
		link: `${DESIGNS_BASE_URL}/timetrackingdashboard`,
		poster: timeTrackingPoster,
	},

	{
		title: "Article Preview",
		link: `${DESIGNS_BASE_URL}/articlepreview`,
		poster: articlePoster,
	},

	{
		title: "Base Apparel",
		link: `${DESIGNS_BASE_URL}/baseapparel`,
		poster: baseApparelPoster,
	},
];
