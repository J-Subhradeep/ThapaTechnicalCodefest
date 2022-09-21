import React, { useEffect, useRef } from "react";
import LowerMain from "../Body/LowerBody/LowerMain";
import Main from "../Body/Main";
import UpperMain from "../Body/UpperBody/UpperMain";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";

const Landing = () => {
	const element = useRef(null);

	return (
		<>
			<div
				className="main-page"
				id="scroll"
				onScroll={(e) => {
					console.log(e.target.scrollTop);
				}}
			>
				<Navbar />
				<Hero />
				<UpperMain />
				<LowerMain />
				<Footer />
			</div>
		</>
	);
};

export default Landing;
