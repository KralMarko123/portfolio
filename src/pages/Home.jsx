import React from "react";
import IntroSection from "../components/IntroSection";
import { TbArrowNarrowDown } from "react-icons/tb";
import "../styles/general/page.css";
import "../styles/Home.css";

const Home = () => {
	return (
		<div className="home page">
			<IntroSection />
			<TbArrowNarrowDown />
		</div>
	);
};

export default Home;
