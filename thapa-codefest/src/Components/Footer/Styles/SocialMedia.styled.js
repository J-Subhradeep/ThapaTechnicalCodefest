import styled from "styled-components";
export const SocialMediaWrapper = styled.div`
	position: relative;
	/* display: flex; */
	left: 0;
	/* width: 100%; */
	bottom: 0;
	.social-media {
		position: absolute;
		right: 100%;
		display: flex;
		bottom: 0;
		div {
			margin: 10px;
			cursor: pointer;
			transition: all 0.3s;
			&:hover {
				transition: all 0.3s;
				scale: 1.09;
			}
		}
	}
	@media screen and (max-width: 800px) {
		/* .social-media { */
		/* left: 60px; */
		/* display: flex; */
		/* justify-content: center; */
		/* width: 100%; */
		.social-media {
			left: 20px;
			position: relative;
			/* background-color: red; */
		}
		/* transform: translate(50%, 0); */
		/* } */
	}
`;
