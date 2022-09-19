import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
const ThirtyDayReturn = () => {
	const Wrapper = styled.section`
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 15px 0px;
		.header {
			font-size: 34px;
			color: #2f1c6a;
			margin-top: 20px;
			padding: 10px;
		}
		.desp {
			color: #2f1c6a;
			font-size: 15px;
			padding: 10px;
			text-align: center;
		}
		@media (max-width: 600px) {
			.header {
				font-size: 24px;
			}
		}
	`;
	return (
		<Wrapper>
			<p className="header">
				<b>30-Day Money Back Guarentee</b>
			</p>
			<p className="desp">
				We'll refund your payment if you’re not 100% satisfied with Hostinger.
				No hassle, no risk.
			</p>
			<Button
				variant="contained"
				sx={{
					bgcolor: "#673DE6",
					padding: "10px 20px",
					width: "280px",
					borderRadius: "30px",
					margin: "20px 10px",
					transition: "0.5s",
					"&:hover": { bgcolor: "#412695", scale: "1.2", transition: "0.5s" },
				}}
			>
				Get Started
			</Button>
		</Wrapper>
	);
};

export default ThirtyDayReturn;
