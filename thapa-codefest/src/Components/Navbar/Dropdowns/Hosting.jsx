import React from "react";
import webImg from "../Static/Images/web-hosting.png";
import cloud from "../Static/Images/cloud.png";
import wordpress from "../Static/Images/wordpress.png";
import General from "./General";
const Hosting = () => {
	const content = [
		{
			img: webImg,
			heading: "Web Hosting",
			subHeading: "For small to medium websites.",
		},
		{
			img: cloud,
			heading: "Cloud Hosting",
			subHeading: "For large scale projects.",
		},
		{
			img: wordpress,
			// width: "45px",
			heading: "Wordpress Hosting",
			subHeading: "Optimized solutions for WordPress hosting.",
		},
	];
	return <General content={content} />;
};

export default Hosting;
