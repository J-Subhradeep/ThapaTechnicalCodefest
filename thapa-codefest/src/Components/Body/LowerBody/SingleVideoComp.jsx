import React from "react";
import { SingleVideoCompWrapper } from "../Styles/LowerBodyStyles/SingleVideoCompWrapper";
import { motion } from "framer-motion";
const SingleVideoComp = (props) => {
	return (
		<SingleVideoCompWrapper>
			{props.val % 2 == 0 ? (
				<div className="main-container">
					<motion.div
						className="description-of-videos"
						initial={{ scale: 0 }}
						whileInView={{ scale: 1 }}
					>
						<p className="light-header">{props.lightHeader}</p>
						<p className="desp-header">{props.darkHeader}</p>
						<p className="description-main">{props.desc}</p>
						<p className="link">{props.link}</p>
					</motion.div>
					<div className="video-elements">
						<video muted autoPlay className="video-data ">
							<source src={props.video} type="video/mp4" />{" "}
						</video>
					</div>
				</div>
			) : (
				<div className="main-container2">
					<div className="video-elements">
						<video muted autoPlay className="video-data">
							<source src={props.video} type="video/mp4" />{" "}
						</video>
					</div>
					<motion.div
						className="description-of-videos"
						initial={{ scale: 0 }}
						whileInView={{ scale: 1 }}
					>
						<p className="light-header">{props.lightHeader}</p>
						<p className="desp-header">{props.darkHeader}</p>
						<p className="description-main">{props.desc}</p>
					</motion.div>
				</div>
			)}
		</SingleVideoCompWrapper>
	);
};

export default SingleVideoComp;
