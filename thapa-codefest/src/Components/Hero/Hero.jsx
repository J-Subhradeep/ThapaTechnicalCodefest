import React from "react";
import { HeroSectionWrapper } from "./Styles/HeroWrapper.styled";

const Hero = () => {
	return (
		<HeroSectionWrapper>
			<div className="hero-grid-main">
				<div className="hero-left-main">
					<div className="left-heading">
						<h1>Savings to Set Your Website in Motion</h1>
					</div>
				</div>
				<div className="hero-right-main"></div>
			</div>
		</HeroSectionWrapper>
	);
};

export default Hero;
