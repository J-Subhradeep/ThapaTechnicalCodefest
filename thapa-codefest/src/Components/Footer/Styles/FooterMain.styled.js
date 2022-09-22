import styled from "styled-components";
export const FooterMain = styled.div`
	min-height: 300px;
	width: 100vw;
	background-image: linear-gradient(45deg, #87c7ff61, #6565fd5f, #82eefa72);
	padding: 40px;
	padding-bottom: 20px;
	display: flex;
	/* align-items: center; */
	justify-content: center;
	flex-wrap: wrap;
	contain: content;
	.copyright {
		height: 50px;
		width: 100%;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 1px solid #ababab;
	}
	@media screen and (max-width: 768px) {
		justify-content: flex-start;
	}
	@media screen and (max-width: 500px) {
		.copyright {
			flex-direction: column;
			/* padding: 10px; */
			height: 70px;
			justify-content: center;
			align-items: flex-start;
			span {
				margin-top: 10px;
			}
		}
	}
	@media screen and (max-width: 400px) {
		padding: 20px;
	}
`;
