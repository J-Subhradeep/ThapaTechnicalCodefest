import React from "react";
import General from "./General";
import domain from "../Static/Images/domain.png";
import whois from "../Static/Images/whois.png";
import domainTransfer from "../Static/Images/domainTransfer.png";
const Domain = () => {
	const content = [
		{
			img: domain,
			// width: "40px",
			height: "40px",
			heading: "Domain Name Search",
			subHeading: "Find the perfect domain name",
		},
		{
			img: whois,
			// width: "40px",
			height: "40px",
			heading: "WHOIS Lookup",
			subHeading: "Lookup tool find WHOIS information.",
		},
		{
			img: domainTransfer,
			// width: "40px",
			height: "40px",
			heading: "Domain Transfer",
			subHeading: "Wants to transfer domain to Hostinger ?",
		},
	];
	return <General content={content} />;
};

export default Domain;
