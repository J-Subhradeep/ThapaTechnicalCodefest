import styled from "styled-components";

export const WebplanWrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	.writeUp-WP {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.heading-WU {
		font-size: 2rem;
		font-weight: 600;
		padding: 15px 15px 5px 15px;
		color: #2f1c6a;
	}
	.desp-WU {
		font-size: 0.95rem;
		text-align: center;
		width: 450px;
		color: #727586;
		padding: 10px;
	}
	.webplan-grid-main-container {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 50px 10px;
		width: 85vw;
	}
	.webplan-grid-main {
		border-radius: 10px;
		border: 1px solid grey;
		box-shadow: 0px 0px 10px grey;
	}
	.webplan-grid-main-header {
		background-color: #673de6;
		border-radius: 10px 10px 0px 0px;
		padding: 15px;
		width: 100%;
	}
	.webplan-grid-main-header p {
		color: #fff;
		font-size: 30px;
		font-weight: 700;
		text-align: center;
	}

	.specs {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		padding: 10px 15px 10px 30px;
		color: #2f1c6a;
	}
	/* .tooltip {
    font-family: "Grape Nuts", Helvetica;
    color: deepskyblue;
    background-color: rgba(255, 255, 0, 0.4);
  } */
	.data-grid-main {
		/* padding: 20px 10px 20px 25px; */
		font-size: 16px;
		display: flex;
		align-items: center;
		/* justify-content: center; */
	}
	.data-grid-main-div,
	.see-all-container div {
		width: 100%;
	}

	.border-between-grid {
		border-left: 2px solid #673de660;
		margin-top: 20px;
		border-radius: 5px;
		height: 200px;
	}
	.border-between-grid-lower {
		border-left: 2px solid #673de660;
		margin-top: 30px;
		border-radius: 5px;
		height: 440px;
		margin-left: 5px;
	}

	.pricing-grid-main {
		color: #2f1c6a;
		padding: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.pricing-grid {
		display: flex;
		justify-content: center;
	}
	.pricing-grid-main.price {
		font-size: 50px;
		margin-top: -15px;
	}
	.pricing-grid-main span {
		margin-top: 32px;
		padding-left: 4px;
	}
	.pricing-grid-main b {
		font-size: 0.9rem;
	}
	.btn-select-pricing-grid-main {
		width: 80%;
		margin-top: 15px;
		border-radius: 50px;
		padding: 10px;
		font-size: 15px;
		font-weight: 700;
		background: #673de6;
	}
	.btn-select-pricing-grid-main:hover {
		background: #5230b8;
	}
	.seeall-grid-main h1 {
		text-align: center;
		font-weight: 800;
		padding: 15px 5px;
		font-size: 20px;
		color: #2f1c6a;
	}
	.see-all-main-grid {
		display: flex;
		justify-content: space-around;
		align-items: center;
		/* flex-direction: column; */
		/* width: 102%; */
	}

	.see-all-grid-header {
		text-align: center;
		font-size: 17px;
		color: #2f1c6a;
		text-decoration: underline;
		cursor: pointer;
		border-top: 1px solid #7275866d;
		padding: 25px;
		width: 100%;
	}

	@media (max-width: 900px) {
		.off-at-sm {
			display: none;
		}
		.data-grid-main {
			padding-top: 0px;
		}
		.border-between-grid-lower {
			margin-left: 0px;
		}
	}
	@media (max-width: 600px) {
		.off-at-xs {
			display: none;
		}
	}
	.see-all-container {
		padding: 0px;
	}
	.see-all-main-grid {
		justify-content: flex-start;
	}
	.desp-WU {
		width: 90vw;
	}
	.select-plan {
		position: relative;
		display: flex;
		justify-content: center;
	}
	.btn-select-plan {
		background-color: red;
		/* position: absolute; */
		/* bottom: -30px; */
		background-image: linear-gradient(
			145deg,
			#37b6ff 0%,
			#468ef1 2%,
			rgba(255, 0, 202, 1) 100%
		);
		border-radius: 30px;
		width: 250px;
		height: 40px;
		/* margin-top: 30px; */
		background-size: 400%;
		transition: all 0.5s;
		background-position: center;
		color: white;
		&:hover {
			background-position-x: -40px;
			color: #00e1ff;
			text-shadow: 1px 1px 2px #00e1ff;
			box-shadow: 3px 0 3px #00e1ff, 0 -3px 3px #00e1ff, -3px 0 3px #00e1ff,
				0 3px 3px #00e1ff;
			width: 260px;

			transition: all 0.5s;
		}
	}
`;
