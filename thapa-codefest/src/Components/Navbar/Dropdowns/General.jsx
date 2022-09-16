import React from "react";
import { DropdownWrapper } from "../Style/Dropdown.styled";
import { motion } from "framer-motion";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";
import { Button } from "@mui/material";
import web from "../Static/Images/web-hosting.png";
import cloud from "../Static/Images/cloud.png";
import wordpress from "../Static/Images/wordpress.png";
const General = (props) => {
	return (
		<motion.div initial={{ y: -100 }} animate={{ y: 10 }}>
			<DropdownWrapper>
				<div className="list-dropdown">
					{props.content.map((value, index) => {
						return (
							<div className="li-item">
								<div className="li-icon">
									<img
										src={value.img}
										alt=""
										height={value.height ? value.height : "50px"}
										width="auto"
									/>
								</div>
								<div className="li-text">
									<div className="li-heading">{value.heading}</div>
									<div className="li-subtext">{value.subHeading}</div>
								</div>
							</div>
						);
					})}
				</div>
			</DropdownWrapper>
		</motion.div>
	);
};

export default General;
