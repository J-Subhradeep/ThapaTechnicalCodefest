import styled from "styled-components";
export const FooterMain = styled.div`
	min-height: 300px;
	width: 100vw;
	background-image: linear-gradient(45deg, #87c7ff61, #6565fd5f, #82eefa72);
	padding: 40px;
	display: flex;
	/* align-items: center; */
	justify-content: center;
	flex-wrap: wrap;
	contain: content;
	@media screen and (max-width: 768px) {
		justify-content: flex-start;
	}
	@media screen and (max-width: 400px) {
		padding: 20px;
	}
`;
