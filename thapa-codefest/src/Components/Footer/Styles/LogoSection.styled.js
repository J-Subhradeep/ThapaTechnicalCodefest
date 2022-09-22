import styled from "styled-components";
export const LogoSectionWrapper = styled.div`
	min-height: 300px;
	width: 350px;
	/* background: #ef9f9f; */
	display: flex;
	/* align-items: center; */
	flex-direction: column;
	margin-right: 10px;
	/* padding; */
	/* justify-content: center; */
	.logo {
		height: auto;
		width: 150px;
		filter: grayscale(130%);
	}
	.text {
		font-size: 12px;
		color: #000000da;
		text-align: justify;
		padding: 5px;
	}
	.footer-new-holder-right-holder__payments {
		display: flex;
		list-style: none;
	}
	.footer-new-holder-right-holder-payments__payment {
		margin: 5px;
	}
	#hgr-footer-footer-link-add_more {
		text-decoration: none;
		color: black;
		cursor: pointer;
		margin: 5px;
		font-size: 12px;
		font-weight: bold;
	}
	@media screen and (max-width: 800px) {
		width: 100%;
	}
`;
