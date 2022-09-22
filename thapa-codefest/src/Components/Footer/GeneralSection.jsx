import React from "react";
import { SecondSectionWrapper } from "./Styles/GeneralSection.styled";
// import { HostingList  from "./Static/Js/HostingList";
const GeneralSection = (props) => {
	return (
		<SecondSectionWrapper>
			<span className="heading">{props.heading}</span>
			<div className="list">
				{props.list.map((data, index) => {
					return (
						<div className="list-item">
							<span>{data}</span>
						</div>
					);
				})}
			</div>
		</SecondSectionWrapper>
	);
};

export default GeneralSection;
