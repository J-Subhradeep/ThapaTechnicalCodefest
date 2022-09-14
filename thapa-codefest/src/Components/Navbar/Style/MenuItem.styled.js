import styled from "styled-components";
export const MenuItemWrapper = styled.div`
	padding: 5px;
	font-size: 15px;
	color: black;
	margin: auto;
	font-weight: 500;
	display: flex;
	align-items: center;
	position: relative;

	/* justify-content: center; */
	&:hover {
		transition: all 0.5s;
		color: #7d7d7d;
		cursor: pointer;
		/* font-weight: bold; */
	}
	.downIcon {
		position: relative;
		top: 2px;
		transform-origin: center;
	}
`;
