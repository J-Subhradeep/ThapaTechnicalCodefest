import React from "react";
import GeneralSection from "./GeneralSection";
import LogoSection from "./LogoSection";
import { FooterMain } from "./Styles/FooterMain.styled";
import { HostingList } from "./Static/Js/HostingList";
import { DomainList } from "./Static/Js/DomainList";
import { InformationList } from "./Static/Js/InformationList";
import { CompanyList } from "./Static/Js/CompanyList";
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
			</FooterMain>
		</div>
	);
};

export default Footer;
