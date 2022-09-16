import React from "react";
import General from "./General";
import google from "../Static/Images/google.png";
import hostinger from "../Static/Images/hostinger.png";
const Email = () => {
	const content = [
		{
			img: google,
			heading: "Google Workspace Email Hosting",
			subHeading: "Get custom Email and 30GB of storage.",
		},
		{
			img: hostinger,
			height: "40px",
			heading: "Hostinger Email Hosting",
			subHeading: "Promote your business with every outreach.",
		},
	];
	return <General content={content} />;
};

export default Email;
