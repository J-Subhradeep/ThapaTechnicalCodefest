import React from "react";
import { HeroSectionWrapper } from "./Styles/HeroWrapper.styled";
import CountUp from "react-countup";
import { Button } from "@mui/material";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import image from "./Static/Images/y.png";
import { ImageContainerWrapper } from "./Styles/ImageContainer.styled";
import { motion } from "framer-motion";
const Hero = () => {
	return (
		<HeroSectionWrapper>
			<div className="hero-grid-main">
				<div className="hero-left-main">
					<div className="left-heading">
						<h1>Everything you need to create your website</h1>
						<div className="count-up">
							<span>
								Join{" "}
								<CountUp
									start={1000000}
									end={1278620}
									duration={2}
									separator=","
								/>{" "}
								website owners who are building their businesses online.
							</span>
						</div>
						<div>
							<Button className="get-started" sx={{ color: "#3dbfe6" }}>
								Get Started
							</Button>
						</div>
						<div className="money-back">
							<PriceCheckIcon
								style={{ paddingRight: "5px", fontSize: "28px" }}
							/>
							<span>30-day money-back guarantee</span>
						</div>
					</div>
				</div>
				<div className="hero-right-main">
					<motion.div
						className="right-image-main"
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 1.2 }}
					>
						<ImageContainerWrapper>
							<motion.img
								src={image}
								alt=""
								height="550px"
								width="auto"
								style={{ y: 6 }}
								animate={{ y: 0 }}
								transition={{
									delay: 1.2,
									duration: 2,
									type: "keyframes",
									repeat: Infinity,
									repeatType: "mirror",
								}}
							/>
						</ImageContainerWrapper>
					</motion.div>
				</div>
			</div>
		</HeroSectionWrapper>
	);
};

export default Hero;
