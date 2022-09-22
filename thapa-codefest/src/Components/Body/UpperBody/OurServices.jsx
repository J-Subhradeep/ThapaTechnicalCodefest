import React from "react";
import { Services } from "../Static/Js/Datas";
import { ServicesWrapper } from "../Styles/UpperBodyStyles/OurServices.styled";
import { motion } from "framer-motion";
import { fadePara2 } from "../Styles/UpperBodyStyles/Variants";
const OurServices = () => {
	return (
		<ServicesWrapper>
			<b>Our Services Include:</b>
			<motion.div
				className="services-all-main-container"
				variants={fadePara2}
				initial="offscreen"
				whileInView="onscreen"
			>
				{Services.map((data, index) => {
					return (
						<div className="single-service-element" key={index}>
							<img height="42px" width="42px" src={data.icon} alt="" />
							<p className="single-service-description">{data.data}</p>
						</div>
					);
				})}
			</motion.div>
		</ServicesWrapper>
	);
};

export default OurServices;
