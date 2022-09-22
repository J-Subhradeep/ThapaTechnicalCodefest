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
				<motion.div
					initial={{ y: 3 }}
					animate={{ y: 0 }}
					transition={{ repeat: Infinity, duration: 4 }}
				>
					<LinkedIn style={{ fontSize: "35px" }} />
				</motion.div>
				<motion.div
					initial={{ y: 5, rotate: 10 }}
					animate={{ y: 0, rotate: 0 }}
					transition={{ repeat: Infinity, duration: 6 }}
				>
					<Facebook style={{ fontSize: "35px" }} />
				</motion.div>
				<motion.div
					initial={{ rotate: -10 }}
					animate={{ rotate: 0 }}
					transition={{ repeat: Infinity, duration: 3 }}
				>
					<Instagram style={{ fontSize: "35px" }} />
				</motion.div>
				<motion.div
					initial={{ y: 2, rotate: -12 }}
					animate={{ y: 0, rotate: 0 }}
					transition={{ repeat: Infinity, duration: 4 }}
				>
					<Twitter style={{ fontSize: "35px" }} />
				</motion.div>
				<motion.div
					initial={{ y: 2, rotate: 15 }}
					animate={{ y: -1, rotate: 0 }}
					transition={{ repeat: Infinity, duration: 4 }}
				>
					<YouTube style={{ fontSize: "35px" }} />
				</motion.div>
			</motion.div>
		</SocialMediaWrapper>
	);
};

export default SocialMedia;
