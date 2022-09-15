import React from "react";
import { DropdownWrapper } from "../Style/Dropdown.styled";
import { motion } from "framer-motion";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";
import { Button } from "@mui/material";
import web from "../Static/Images/web-hosting.png";
import cloud from "../Static/Images/cloud.png";
import wordpress from "../Static/Images/wordpress.png";
const General = () => {
	return (
		<motion.div initial={{ y: -100 }} animate={{ y: 10 }}>
			<DropdownWrapper>
				<div className="list-dropdown">
					<div className="li-item">
						<div className="li-icon">
							<img src={web} alt="" height="auto" width="50px" />
						</div>
						<div className="li-text">
							<div className="li-heading">Web Hosting</div>
							<div className="li-subtext">For small to medium websites.</div>
						</div>
					</div>
					<div className="li-item">
						<div className="li-icon">
							<img src={cloud} alt="" height="auto" width="50px" />
						</div>
						<div className="li-text">
							<div className="li-heading">Cloud Hosting</div>
							<div className="li-subtext">For large scale projects.</div>
						</div>
					</div>
					<div className="li-item">
						<div className="li-icon">
							<img src={wordpress} alt="" height="auto" width="50px" />
						</div>
						<div className="li-text">
							<div className="li-heading">Cloud Hosting</div>
							<div className="li-subtext">
								Optimized solutions for WordPress hosting.
							</div>
						</div>
					</div>
				</div>
			</DropdownWrapper>
		</motion.div>
	);
};

export default General;
