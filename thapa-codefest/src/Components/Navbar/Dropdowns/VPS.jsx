import React from "react";
import vps from "../Static/Images/vps.png";
import cyberpanel from "../Static/Images/cyberpanel.png";
import minecraft from "../Static/Images/minecraft.png";
import General from "./General";
const VPS = () => {
	const content = [
		{
			img: vps,
			// width: "40px",
			height: "40px",
			heading: "VPS Hosting",
			subHeading: "Dedicated resorces to scale",
		},
		{
			img: cyberpanel,
			heading: "CyberPanel Hosting",
			subHeading: "Control Panel with Open/LightSpeed Webserver",
		},
		{
			img: minecraft,
			height: "50px",
			heading: "Minecraft Server Hosting",
			subHeading: "Share your minecraft experience.",
		},
	];
	return <General content={content} />;
};

export default VPS;
