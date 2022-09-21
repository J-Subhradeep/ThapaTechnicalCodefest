import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Twitter from "@mui/icons-material/Twitter";
import YouTube from "@mui/icons-material/YouTube";
import React from "react";
import { SocialMediaWrapper } from "./Styles/SocialMedia.styled";
import { motion } from "framer-motion";
const SocialMedia = () => {
	return (
		<SocialMediaWrapper>
			<motion.div
				className="social-media"
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 1 }}
			>
				<motion.div>
					<LinkedIn style={{ fontSize: "35px" }} />
				</motion.div>
				<motion.div>
					<Facebook style={{ fontSize: "35px" }} />
				</motion.div>
				<motion.div>
					<Instagram style={{ fontSize: "35px" }} />
				</motion.div>
				<motion.div>
					<Twitter style={{ fontSize: "35px" }} />
				</motion.div>
				<motion.div>
					<YouTube style={{ fontSize: "35px" }} />
				</motion.div>
			</motion.div>
		</SocialMediaWrapper>
	);
};

export default SocialMedia;
