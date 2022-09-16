import styled from "styled-components";
export const HeroSectionWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: rgb(103, 61, 230);
	.hero-grid-main {
		width: 100%;
		height: 100%;
		display: grid;
		box-sizing: border-box;
		grid-template-columns: auto auto;
		.hero-left-main {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.left-heading {
				position: absolute;
				width: 500px;
				text-align: center;
				color: white;
			}
		}
		.hero-right-main {
			width: 100%;
			height: 100%;
			/* background-color: rgba(22, 56, 22, 0.5); */
		}
	}
`;
