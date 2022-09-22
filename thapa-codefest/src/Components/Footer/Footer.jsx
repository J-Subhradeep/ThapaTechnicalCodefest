import React from "react";
import GeneralSection from "./GeneralSection";
import LogoSection from "./LogoSection";
import { FooterMain } from "./Styles/FooterMain.styled";
import { HostingList } from "./Static/Js/HostingList";
import { DomainList } from "./Static/Js/DomainList";
import { InformationList } from "./Static/Js/InformationList";
import { CompanyList } from "./Static/Js/CompanyList";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SocialMedia from "./SocialMedia";
const Footer = () => {
	return (
		<div>
			<FooterMain>
				<div className="logo-section">
					<LogoSection />
				</div>
				<div className="second-section">
					<GeneralSection heading={"Hosting"} list={HostingList} />
				</div>
				<div className="second-section">
					<GeneralSection heading={"Domain"} list={DomainList} />
				</div>
				<div className="second-section">
					<GeneralSection heading={"Information"} list={InformationList} />
					<GeneralSection
						heading={"Legal"}
						list={["Privacy Policy", "Terms of Service"]}
					/>
				</div>
				<div className="second-section">
					<GeneralSection heading={"Company"} list={CompanyList} />
					<GeneralSection
						heading={"Help"}
						list={["Tutorials", "Knowledge Base", "Report Online Abuse"]}
					/>
				</div>
				<SocialMedia />
				<div className="copyright">
					<span>
						© 2004-2022 hostinger.in - India’s #1 Web Hosting & Domains
						provider.
					</span>
					<span>Prices are listed without VAT</span>
				</div>
			</FooterMain>
		</div>
	);
};

export default Footer;
