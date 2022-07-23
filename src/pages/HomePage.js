import React from "react";
import { FeaturedProducts, Hero, Services, SlideShow } from "../components";
const HomePage = () => {
	return (
		<main>
			<Hero></Hero>
			<FeaturedProducts></FeaturedProducts>
			<Services></Services>
			<SlideShow></SlideShow>
		</main>
	);
};

export default HomePage;
